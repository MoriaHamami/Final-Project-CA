// import { getWapDemoById } from '../services/wap.service.local.js'
import { utilService } from '../services/util.service.js'
import { wapService } from '../services/wap.service.js'
import { store } from '../store/store.js'
import { SET_WAP, SET_CMP_ID, SET_ELEMENT } from './wap.reducer.js'

export async function saveWap(wap) {
    try {
        const savedWap = await wapService.save(wap)
        // const savedWap = wap
        store.dispatch({ type: SET_WAP, wap: savedWap })
        return savedWap._id
    } catch (err) {
        throw new Error('wap not found')
    }
}

export function setSelectedCmpId(cmpId) {
    store.dispatch({ type: SET_CMP_ID, cmpId })
}

export function setSelectedElement(element) {
    store.dispatch({ type: SET_ELEMENT, element })
}


// export async function saveWap(wapId) {
//     let wap = getWapDemoById(wapId)
//     if (!wap) {
//         throw new Error('wap not found')
//     }
//     // console.log('wap:', wap)
//     try {
//         const wapCopy = { ...wap }
//         delete wapCopy._id
//         const wapWithId = await wapService.save(wapCopy)
//         store.dispatch({ type: SET_WAP, wap: wapWithId })
//         return wapWithId._id
//     } catch (err) {
//         console.log('err:', err)
//     }
// }

// Loads demo waps when page is refreshed
export async function loadWap(wapId) {
    try {
        let wap = await wapService.getWapById(wapId)
        store.dispatch({ type: SET_WAP, wap })
    } catch (err) {
        console.log('err:', err)
    }
}

export async function loadPublishWap(wapPublishedName) {
    try {
        let wap = await wapService.getWapByName(wapPublishedName)
        store.dispatch({ type: SET_WAP, wap })
        console.log(wap)
    } catch (err) {
        console.log('err:', err)
    }
}

// export async function getCmpByName(wapName) {
//     try {
//         let wap = await wapService.getWapByName(wapName)
//         store.dispatch({ type: SET_WAP, wap })
//     } catch (err) {
//         console.log('err:', err)
//     }
// }

// export async function updateWap(wap) {
//     try {
//         // console.log('wap:', wap)
//         await wapService.save(wap)
//         store.dispatch({ type: SET_WAP, wap })
//     } catch (err) {
//         console.log('err:', err)
//     }
// }

export async function removeCmp(wap, startIdx, endIdx = null) {
    try {
        const [removed] = wap.cmps.splice(startIdx, 1)
        if (endIdx !== null) wap.cmps.splice(endIdx, 0, removed)
        await saveWap(wap)
    } catch (err) {
        console.log('err in removeCmp', err)
        throw err
    }
}

// export async function removeWap(wap) {
//     try {
//         // console.log('wap:', wap)
//         await wapService.save(wap)
//         store.dispatch({ type: SET_WAP, wap })
//     } catch (err) {
//         console.log('err:', err)
//     }
// }

export async function saveCmp(wap, cmp, idx) {
    try {
        const savedWap = await wapService.saveCmp(wap, cmp, idx)
        // const savedWap = wap
        store.dispatch({ type: SET_WAP, wap: savedWap })
        return savedWap._id
    } catch (err) {
        throw new Error('cmp could not be saved')
    }
}
// export async function addCmp(wap, cmp, idx) {
//     try {
//         // Change cmp id so the cmp in sidebar and wap wont be similar
//         const cmpCopy = { ...cmp }
//         cmpCopy.id = utilService.makeId()
//         wap.cmps.splice(idx, 0, cmpCopy)
//         // wap.cmps.unshift(cmpCopy)
//         await saveWap(wap)
//     } catch (err) {
//         console.log('ReviewActions: err in addReview', err)
//         throw err
//     }
// }


// export async function saveWap(wap) {
//     try {
//         // console.log('wap:', wap)
//         await wapService.save(wap)
//         store.dispatch({ type: UPDATE_WAP, wap })
//     } catch (err) {
//         console.log('err:', err)
//     }
// }

// TO CHECKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
// TODO ADD KEY TO EVERY ELEMENT
export function saveElement(wap, cmpId, element) {

    // Get the cmp
    const cmp = wap.cmps.find(cmp => cmp.id === cmpId)
    // Find cmp idx
    const idx = wapService.findCmpIdx(wap, cmp)
    // console.log('cmp action line 136:', wap[idx])

    if(cmp.id === element.id) return saveCmp(wap, cmp, idx)

    // Update cmp
    if (element.key === 'photos' || element.key === 'inputs'|| element.key === 'btns') {
        // Run over the array in in it 
        let isFound = false
        for(let i = 0; i <  cmp.info[element.key].length; i++) {
            const elements = cmp.info[element.key][i]
            // Search the key 
            for (const key in elements) {
                if (elements[key].id === element.id) {
                    cmp.info[element.key][i][key] = element
                    isFound = true
                    break
                }
            }
            if(isFound) break
        }
    } else {
        cmp.info[element.key] = element
    }
    // console.log('cmp action line 158:', cmp)
    saveCmp(wap, cmp, idx)
}



// TO REMOVEEEEEEEEEEEEEEEEEEE
// export function saveElement(wap, selectedCmpId, selectedElement, propertyName, propertyValue) {
//     // export function handleWapEdit(wap, propertyName, propertyValue) {
//         // const cmp = wap.cmps.find(c=>c.id===selectedCmpId)    

//     // Find the current edited cmp
//     const cmpIndex = wap.cmps.findIndex(cmp => cmp.id === selectedCmpId)
//     const editedElement = wap.cmps[cmpIndex]

//     // Check if the edited element is a cmp or an elemnt
//     if (!selectedElement.theme) {
//         for (const key in editedElement.info) {
//             let childElement = editedElement.info[key]
//             // Check if the id of the edited element is found inside another elemnt
//             if (childElement.id === selectedElement.id) {
//                 const updatedElementStyle = { ...childElement.style, [propertyName]: propertyValue }
//                 wap.cmps[cmpIndex].info[key].style = updatedElementStyle
//                 break
//             } else if (Array.isArray(childElement)) {
//                 const idx = childElement.findIndex((elm) => elm.id === selectedElement.id)
//                 // while (idx === -1) {
//                 if (idx !== -1) {
//                     const updatedElementStyle = { ...childElement[idx].style, [propertyName]: propertyValue }
//                     wap.cmps[cmpIndex].info[key][idx].style = updatedElementStyle
//                     break
//                 }
//                 // const idx = childElement.findIndex((elm) => elm.id === selectedElement.id)
//                 // }
//             }
//         }
//     } else {
//         const updatedCmpStyle = { ...editedElement.style, [propertyName]: propertyValue }
//         wap.cmps[cmpIndex].style = updatedCmpStyle
//     }

//     saveWap(wap)
// }


