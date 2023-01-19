import { getTemplateExById } from '../services/templates.service.local.js'
import { wapService } from '../services/wap.service.js'
import { store } from '../store/store.js'
import { SET_WAP, UPDATE_WAP } from './wap.reducer.js'

// Saves new template and loads in editor
export async function saveTemplateDraft(wapId) {
    let wap = getTemplateExById(wapId)
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

// Loads template when page is refreshed
export async function getWapById(wapId) {
    try {
        let wap = await wapService.getById(wapId)
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
