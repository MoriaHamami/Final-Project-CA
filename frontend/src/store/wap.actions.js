import { getWapDemoById } from '../services/wap.service.local.js'
import { wapService } from '../services/wap.service.js'
import { store } from '../store/store.js'
import { SET_WAP } from './wap.reducer.js'

// Saves new wap and loads in editor
export async function saveWap(wap) {
    // console.log('wap:', wap)

    try {
        // if(wap.createdBy) {
            // let wap = getWapDemoById(wap._id)
            // const wapCopy = { ...wap }
            // delete wapCopy._id
            const savedWap = await wapService.save(wap)
        // } else {
            // savedWap = await wapService.save(wap)
            // store.dispatch({ type: SET_WAP, wap })
        // }
        store.dispatch({ type: SET_WAP, wap: savedWap })
        return savedWap._id
    } catch (err) {

        // console.log('err:', err)
        throw new Error('wap not found')

    }
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
        // console.log('endIdx:', endIdx)
        const [removed] = wap.cmps.splice(startIdx, 1)
        // console.log('wap:', wap)
        if(endIdx !== null) wap.cmps.splice(endIdx, 0, removed)
        // console.log('wap:', wap)
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

export async function addCmp(wap, cmp) {
    try {
        wap.cmps.unshift(cmp)
        await saveWap(wap)
    } catch (err) {
        console.log('ReviewActions: err in addReview', err)
        throw err
    }
}


// export async function saveWap(wap) {
//     try {
//         // console.log('wap:', wap)
//         await wapService.save(wap)
//         store.dispatch({ type: UPDATE_WAP, wap })
//     } catch (err) {
//         console.log('err:', err)
//     }
// }
