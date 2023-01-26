
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'


const STORAGE_KEY = 'wap'

export const wapService = {
    query,
    getById,
    save,
    remove,
    getEmptyWap,
    addWapMsg
}
window.cs = wapService


async function query(filterBy = { txt: '', price: 0 }) {
    return httpService.get(STORAGE_KEY, filterBy)
}
function getById(wapId) {
    return httpService.get(`wap/${wapId}`)
}

async function remove(wapId) {
    return httpService.delete(`wap/${wapId}`)
}
async function save(wap) {
    var savedWap
    if (wap._id) {
        savedWap = await httpService.put(`wap/${wap._id}`, wap)

    } else {
        savedWap = await httpService.post('wap', wap)
    }
    return savedWap
}

async function addWapMsg(wapId, txt) {
    const savedMsg = await httpService.post(`wap/${wapId}/msg`, {txt})
    return savedMsg
}


function getEmptyWap() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}





