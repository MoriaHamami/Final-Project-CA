import { getTemplateExById } from '../services/templates.service.local.js'
import { wapService } from '../services/wap.service.js'
import { store } from '../store/store.js'
import { SET_WAP, UPDATE_WAP } from './wap.reducer.js'


export async function loadTemplate(wapId) {
    let wap = getTemplateExById(wapId)
    try {
        const wapCopy = { ...wap }
        delete wapCopy._id
        const wapWithId = await wapService.save(wapCopy)
        // console.log('wapWithId:', wapWithId)
        store.dispatch({ type: SET_WAP, wap: wapWithId })
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
