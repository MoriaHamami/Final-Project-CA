import { getTemplateById } from '../services/templates.service.local.js'
import { store } from '../store/store.js'
import { SET_WAP, UPDATE_WAP } from './wap.reducer.js'


export function loadTemplate(wapId) {
    let wap = getTemplateById(wapId)

    const wapCopy = { ...wap }
    delete wapCopy._id
    store.dispatch({ type: SET_WAP, wap: wapCopy })
}


export function updateWap(wap) {
    store.dispatch({ type: UPDATE_WAP, wap })

}