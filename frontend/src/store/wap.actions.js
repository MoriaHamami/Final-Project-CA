import { wapTemplates } from '../services/templates.service.local.js'
import { store } from '../store/store.js'


export function loadTemplate(wapId) {
    let wap = wapTemplates[0]
    const wapCopy = { ...wap }
    delete wapCopy._id
    store.dispatch({ type: 'SET_WAP', wap: wapCopy })
}