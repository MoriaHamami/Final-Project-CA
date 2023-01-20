
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { getWapDemoById, wapDemos } from './wap.service.local.js'
import { storageService } from './async-storage.service.js'


const STORAGE_KEY = 'waps'

export const wapService = {
    query,
    getWapById,
    save,
    removeWap,
    // removeCmp,
    changeCmpId,
    // getWapByName
    // getEmptyWap,
    // addWapMsg
}
window.cs = wapService

_createWaps()

async function query(filterBy = { txt: '', price: 0 }) {
    // return httpService.get(STORAGE_KEY, filterBy)
}

function getWapById(wapId) {
    return storageService.getById(STORAGE_KEY, wapId)
    // return httpService.get(`wap/${wapId}`)
}

// function getWapByName(wapName) {
//     return storageService.getByName(STORAGE_KEY, wapName)
//     // return httpService.get(`wap/${wapId}`)
// }

async function removeWap(wapId) {
    await storageService.remove(STORAGE_KEY, wapId)
    // return httpService.delete(`wap/${wapId}`)
}

// async function removeCmp(wap, cmpId) {

//     await storageService.remove(STORAGE_KEY, wapId)
//     // return httpService.delete(`wap/${wapId}`)
// }

async function save(wap) {
    let savedWap
    if (wap.createdBy) {
        // const wapCopy = { ...wap }
        savedWap = storageService.put(STORAGE_KEY, wap)
        // return storageService.put(STORAGE_KEY, wap)
        // savedWap = await httpService.put(`wap/${wap._id}`, wap)

    } else {
        // Later, owner is set by the backend
        // delete wap._id
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
        storageService.saveToStorage(STORAGE_KEY, wapDemos)
    }
}





