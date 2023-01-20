// WAP DEMOS
import { emptyWapDemo } from '../waps/wap-demos/empty-wap-demo'
import { wapDemo1 } from '../waps/wap-demos/wap-demo-1.js'
import { wapDemo2 } from '../waps/wap-demos/wap-demo-2.js'

// HEADERS
import { wapHeader1 } from '../waps/headers/wap-header-1.js'

// HEROS
import { wapHero1 } from '../waps/heros/wap-hero-1'

// PREVIEWS
import { wapPreview1 } from '../waps/previews/wap-preview-1'

// CONTAINERS
import { wapContainer1A } from '../waps/containers/wap-container-1a'
import { wapContainer1B } from '../waps/containers/wap-container-1b'

// FOOTERS
import { wapFooter1 } from '../waps/footers/wap-footer-1'
import { wapHeader2 } from '../waps/headers/wap-header-2'
import { wapHero2 } from '../waps/heros/wap-hero-2'
import { wapPreview2 } from '../waps/previews/wap-preview-2'
import { wapContainer2A } from '../waps/containers/wap-container-2a'
import { wapContainer2B } from '../waps/containers/wap-container-2b'
import { wapContainer2C } from '../waps/containers/wap-container-2c'
import { wapFooter2 } from '../waps/footers/wap-footer-2'

// SERVICES
// import { httpService } from './http.service.js'
import { userService } from './user.service.js'
import { storageService } from './async-storage.service.js'


const STORAGE_KEY = 'waps'

export const wapService = {
    query,
    getWapDemos,
    getWapById,
    save,
    removeWap,
    // removeCmp,
    getCmpsByCategory,
    getWapDemoById,
    getCmpById,
    getCmpsList
    // getWapByName
    // getEmptyWap,
    // addWapMsg
}

window.cs = wapService

_createWaps()

const mapCmpByCategory = {
    headers: [wapHeader1, wapHeader2],
    heros: [wapHero1, wapHero2],
    previews: [wapPreview1, wapPreview2],
    containers: [wapContainer1A, wapContainer1B, wapContainer2A, wapContainer2B, wapContainer2C],
    footers: [wapFooter1, wapFooter2],
}

function getWapDemos()  {
    return [
        emptyWapDemo,
        wapDemo1,
        wapDemo2,
    ]
}

function getCmpsList() {
    return Object.keys(mapCmpByCategory)
}

function getCmpsByCategory(category) {
    if (mapCmpByCategory[category]) {
      return mapCmpByCategory[category].map((cmp) => ({
        id: cmp.id,
        thumbnail: cmp.thumbnail,
        category,
      }))
    }
  }

function getWapDemoById(wapDemoId) {
    // if (wapDemoId === 'blank') return { cmps: [] }
    return getWapDemos().find((wapDemo) => wapDemo._id === wapDemoId)
}

function getCmpById(id) {
    let cmpsToReturn = null
    Object.keys(mapCmpByCategory).forEach((category) => {
        const cmp = mapCmpByCategory[category].find((cmp) => cmp.id === id)
        if (cmp) cmpsToReturn = cmp
    })

    return cmpsToReturn
}

async function query() {
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

function _createWaps() {
    let waps = storageService.loadFromStorage(STORAGE_KEY)
    if (!waps || !waps.length) {
        storageService.saveToStorage(STORAGE_KEY, getWapDemos())
    }
}





