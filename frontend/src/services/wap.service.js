// WAP DEMOS
import { emptyWapDemo } from '../waps/wap-demos/empty-wap-demo'
import { wapDemo1 } from '../waps/wap-demos/wap-demo-1.js'
import { wapDemo2 } from '../waps/wap-demos/wap-demo-2.js'
import { wapDemo3 } from '../waps/wap-demos/wap-demo-3.js'

// HEADERS
import { wapHeader1 } from '../waps/headers/wap-header-1.js'
import { wapHeader2 } from '../waps/headers/wap-header-2'
import  {wapHeader3}  from '../waps/headers/wap-header-3'

// HEROS
import { wapHero1 } from '../waps/heros/wap-hero-1'
import { wapHero2 } from '../waps/heros/wap-hero-2'

//ABOUT
import { wapAbout1 } from '../waps/about/wap-about-1'
import { wapAbout2 } from '../waps/about/wap-about-2'

// CONTAINERS

// VIDEOS
import { wapVideo1 } from '../waps/videos/wap-video-1.js'
import { wapVideo2 } from '../waps/videos/wap-video-2.js'

// FORMS
import { wapForm1 } from '../waps/forms/wap-form-1'
import { wapForm2 } from '../waps/forms/wap-form-2.js'

// MAPS
import { wapMap1 } from '../waps/maps/wap-map-1'

// GALERIES
import { wapGallery1 } from '../waps/galleries/wap-gallery-1'
import { wapGallery2A } from '../waps/galleries/wap-gallery-2a'
import { wapGallery2B } from '../waps/galleries/wap-gallery-2b'

// FOOTERS
import { wapFooter1 } from '../waps/footers/wap-footer-1'
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
    getCmpTypes
    // getWapByName
    // getEmptyWap,
    // addWapMsg
}

window.cs = wapService

_createWaps()

const mapCmpByCategory = {
    headers: [wapHeader1, wapHeader2, wapHeader3],
    heros: [wapHero1, wapHero2],
    about: [wapAbout1, wapAbout2],
    containers: [],
    galleries: [wapGallery1, wapGallery2A, wapGallery2B],
    videos: [wapVideo1, wapVideo2],
    forms: [wapForm1, wapForm2],
    maps: [wapMap1],
    footers: [wapFooter1, wapFooter2],
}

function getWapDemos() {
    return [
        emptyWapDemo,
        wapDemo1,
        wapDemo2,
        wapDemo3,
    ]
}

function getCmpTypes() {
    return Object.keys(mapCmpByCategory)
}

function getCmpsByCategory(category) {
    if (mapCmpByCategory[category]) {
        return mapCmpByCategory[category]
        //   return mapCmpByCategory[category].map((cmp) => ({
        //     id: cmp.id,
        //     thumbnail: cmp.thumbnail,
        //     category,
        //   }))
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





