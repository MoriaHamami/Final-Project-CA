import { getWapDemoById } from '../services/wap.service.local.js'
import { wapService } from '../services/wap.service.js'
import { store } from '../store/store.js'
import { SET_WAP, UPDATE_WAP } from './wap.reducer.js'

// Saves new wap and loads in editor
export async function saveWap(wapId) {
    let wap = getWapDemoById(wapId)
    if (!wap) {
        throw new Error('wap not found')
    }
    console.log('wap:', wap)
    try {
        const wapCopy = { ...wap }
        delete wapCopy._id
        const wapWithId = await wapService.save(wapCopy)
        store.dispatch({ type: SET_WAP, wap: wapWithId })
        return wapWithId._id
    } catch (err) {
        console.log('err:', err)
    }
}

// Loads demo waps when page is refreshed
export async function getWapById(wapId) {
    try {
        let wap = await wapService.getWapById(wapId)
        store.dispatch({ type: SET_WAP, wap })
    } catch (err) {
        console.log('err:', err)
    }
}

export async function getCmpByName(wapName) {
    try {
        let wap = await wapService.getWapByName(wapName)
        store.dispatch({ type: SET_WAP, wap })
    } catch (err) {
        console.log('err:', err)
    }
}


export async function updateWap(wap) {
    try {
        // console.log('wap:', wap)
        await wapService.save(wap)
        store.dispatch({ type: UPDATE_WAP, wap })
    } catch (err) {
        console.log('err:', err)
    }
}

export async function removeWap(wap) {
    try {
        // console.log('wap:', wap)
        await wapService.save(wap)
        store.dispatch({ type: UPDATE_WAP, wap })
    } catch (err) {
        console.log('err:', err)
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
