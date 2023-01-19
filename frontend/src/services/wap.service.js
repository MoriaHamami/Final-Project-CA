
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { wapTemplates } from './templates.service.local.js'
import { storageService } from './async-storage.service.js'


const STORAGE_KEY = 'waps'

export const wapService = {
    query,
    getById,
    save,
    remove,
    changeCmpId
    // getEmptyWap,
    // addWapMsg
}
window.cs = wapService

_createWaps()

async function query(filterBy = { txt: '', price: 0 }) {
    // return httpService.get(STORAGE_KEY, filterBy)
}

function getById(wapId) {
    return storageService.get(STORAGE_KEY, wapId)
    // return httpService.get(`wap/${wapId}`)
}

async function remove(wapId) {
    await storageService.remove(STORAGE_KEY, wapId)
    // return httpService.delete(`wap/${wapId}`)
}

async function save(wap) {
    var savedWap
    if (wap._id) {
        return storageService.put(STORAGE_KEY, wap)
        // savedWap = await httpService.put(`wap/${wap._id}`, wap)

    } else {
        // Later, owner is set by the backend
        // console.log('wap:', wap)
        wap.createdBy = userService.getLoggedinUser()?.username || 'guest'
        savedWap = await storageService.post(STORAGE_KEY, wap)
        // savedWap = await httpService.post('wap', wap)
    }
    return savedWap
}

function changeCmpId(cmp) {
    cmp?.cmps?.forEach((currCmp) => {
        currCmp.id = utilService.makeId()
        if (!cmp.cmps || !cmp.cmps.length) return
        else changeCmpId(currCmp)
    })
}

function _createWaps() {
    let waps = storageService.loadFromStorage(STORAGE_KEY)
    if (!waps || !waps.length) {
        storageService.saveToStorage(STORAGE_KEY, wapTemplates)
    }
}





