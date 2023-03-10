// WAP DEMOS
import { emptyWapDemo } from '../waps/wap-demos/empty-wap-demo'
import { wapDemo1 } from '../waps/wap-demos/wap-demo-1.js'
import { wapDemo2 } from '../waps/wap-demos/wap-demo-2.js'
import { wapDemo3 } from '../waps/wap-demos/wap-demo-3.js'
import { wapDemo4 } from '../waps/wap-demos/wap-demo-4.js'
import { wapDemo5 } from '../waps/wap-demos/wap-demo-5.js'
import { wapDemo6 } from '../waps/wap-demos/wap-demo-6.js'
import { wapDemo7 } from '../waps/wap-demos/wap-demo-7.js'


// HEADERS
import { wapHeader1 } from '../waps/headers/wap-header-1.js'
import { wapHeader2 } from '../waps/headers/wap-header-2'
import { wapHeader3 } from '../waps/headers/wap-header-3'
import { wapHeader4 } from '../waps/headers/wap-header-4'
import { wapHeader5 } from '../waps/headers/wap-header-5'
import { wapHeader6 } from '../waps/headers/wap-header-6'

// HEROS
import { wapHero1 } from '../waps/heros/wap-hero-1'
import { wapHero2 } from '../waps/heros/wap-hero-2'
import { wapHero3A } from "../waps/heros/wap-hero-3a";
import { wapHero3B } from "../waps/heros/wap-hero-3b.js";
import { wapHero4 } from "../waps/heros/wap-hero-4.js";
import { wapHero5 } from "../waps/heros/wap-hero-5.js";
import { wapHero6 } from "../waps/heros/wap-hero-6.js";

//ABOUT
import { wapAbout1 } from '../waps/about/wap-about-1'
import { wapAbout2 } from '../waps/about/wap-about-2'
import { wapAbout3A } from "../waps/about/wap-about-3a.js";
import { wapAbout3B } from "../waps/about/wap-about-3b.js";
import { wapAbout4 } from "../waps/about/wap-about-4.js";
import { wapAbout5 } from "../waps/about/wap-about-5.js";
import { wapAbout6 } from "../waps/about/wap-about-6.js";

// CONTAINERS

// VIDEOS
import { wapVideo1 } from '../waps/videos/wap-video-1.js'
import { wapVideo2 } from '../waps/videos/wap-video-2.js'

// FORMS
import { wapForm1 } from '../waps/forms/wap-form-1'
import { wapForm2 } from '../waps/forms/wap-form-2.js'
import { wapForm3 } from "../waps/forms/wap-form-3.js";
import { wapForm4 } from "../waps/forms/wap-form-4.js";

// MAPS
import { wapMap1 } from '../waps/maps/wap-map-1'
import { wapMap6 } from '../waps/maps/wap-map-6'

// GALERIES
import { wapGallery1 } from '../waps/galleries/wap-gallery-1'
import { wapGallery2A } from '../waps/galleries/wap-gallery-2a'
import { wapGallery2B } from '../waps/galleries/wap-gallery-2b'
import { wapGallery3 } from "../waps/galleries/wap-gallery-3.js";
import { wapGallery4A } from '../waps/galleries/wap-gallery-4a'
import { wapGallery4B } from '../waps/galleries/wap-gallery-4b'
import { wapGallery5A } from '../waps/galleries/wap-gallery-5a'
import { wapGallery5B } from '../waps/galleries/wap-gallery-5b'
import { wapGallery6A } from '../waps/galleries/wap-gallery-6a'
import { wapGallery6B } from '../waps/galleries/wap-gallery-6b'

// FOOTERS
import { wapFooter1 } from '../waps/footers/wap-footer-1'
import { wapFooter2 } from '../waps/footers/wap-footer-2'
import { wapFooter3 } from '../waps/footers/wap-footer-3'
import { wapFooter4 } from '../waps/footers/wap-footer-4'
import { wapFooter6 } from '../waps/footers/wap-footer-6'

// SERVICES
// import { httpService } from './http.service.js'
import { userService } from './user.service.js'
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service'
import { wapFooter5 } from '../waps/footers/wap-footer-5'
import { wapForm5 } from '../waps/forms/wap-form-5'
import { httpService } from './http.service'


const STORAGE_KEY = 'wap'

export const wapService = {
    query,
    // getWapDemos,
    getWapById,
    save,
    removeWap,
    // removeCmp,
    getCmpsByType,
    // getWapDemoById,
    getCmpById,
    getCmpTypes,
    saveCmp,
    findCmpIdx,
    // getWapByName,
    getThemes,
    increaseViewCount
    // getEmptyWap,
    // addWapMsg
}

window.cs = wapService
// console.log('waps:', JSON.stringify(getWapDemos()))


// FRONT ONLY

// const mapCmpByCategory = {
//     headers: [wapHeader1, wapHeader2, wapHeader3, wapHeader4, wapHeader5, wapHeader6],
//     heros: [wapHero1, wapHero2, wapHero3A, wapHero3B, wapHero4, wapHero5, wapHero6],
//     about: [wapAbout1, wapAbout2, wapAbout3A, wapAbout3B, wapAbout4, wapAbout5, wapAbout6],
//     // containers: [],
//     galleries: [wapGallery1, wapGallery2A, wapGallery3, wapGallery4A, wapGallery4B, wapGallery5A, wapGallery5B, wapGallery6A, wapGallery6B],
//     videos: [wapVideo1, wapVideo2],
//     forms: [wapForm1, wapForm2, wapForm3, wapForm4, wapForm5],
//     maps: [wapMap1, wapMap6],
//     footers: [wapFooter1, wapFooter2, wapFooter3, wapFooter4, wapFooter5, wapFooter6],
// }

// FRONT ONLY
function getWapDemos() {
    return [
        emptyWapDemo,
        wapDemo5,
        wapDemo6,
        wapDemo4,
        wapDemo3,
        wapDemo1,
        wapDemo2,
        wapDemo7,
    ]
}

// FRONT ONLY
// function getCmpTypes() {
//     return Object.keys(mapCmpByCategory)
// }


// FRONT ONLY
// function getWapDemoById(wapDemoId) {
//     // if (wapDemoId === 'blank') return { cmps: [] }
//     return getWapDemos().find((wapDemo) => wapDemo._id === wapDemoId)
// }

// FRONT ONLY
// function getCmpById(id) {
//     let cmpsToReturn = null
//     Object.keys(mapCmpByCategory).forEach((category) => {
//         const cmp = mapCmpByCategory[category].find((cmp) => cmp.id === id)
//         if (cmp) cmpsToReturn = cmp
//     })

//     return cmpsToReturn
// }

async function query(filterBy = { isPublished: '', isDemo: '', cmpId: '', wapName: '', username: '' }) {
    const queryParams = `?isPublished=${filterBy.isPublished}&isDemo=${filterBy.isDemo}&cmpId=${filterBy.cmpId}&wapName=${filterBy.wapName}&username=${filterBy.username}`
    // return storageService.query(STORAGE_KEY)
    // console.log('filterBy:', filterBy)
    return httpService.get(STORAGE_KEY + queryParams)
}

function getWapById(wapId) {
    // return storageService.getById(STORAGE_KEY, wapId)
    return httpService.get(`wap/${wapId}`)
}

function getCmpById(cmpId) {
    // return storageService.getById(STORAGE_KEY, cmpId)
    return httpService.get(`wap/${cmpId}/cmp`)
}


// function getWapByName(wapName) {
//     return storageService.getByName(STORAGE_KEY, wapName)
//     // return httpService.get(`wap/${wapId}`)
// }

async function removeWap(wapId) {
    // await storageService.remove(STORAGE_KEY, wapId)
    return httpService.delete(`wap/${wapId}`)
}

// async function removeCmp(wap, cmpId) {
//     await storageService.remove(STORAGE_KEY, wapId)
//     // return httpService.delete(`wap/${wapId}`)
// }

async function save(wap) {
    console.log('wap:',wap)
    let savedWap
    // if (wap.createdBy) {
        // console.log('wap._id:',wap[0]._id)
    if (wap._id) {
        // savedWap = await storageService.put(STORAGE_KEY, wap)
        savedWap = await httpService.put(`wap/${wap._id}`, wap)
    } else {
        // wap.createdBy = userService.getLoggedinUser()?.username || 'guest'
        // savedWap = await storageService.post(STORAGE_KEY, wap)
        savedWap = await httpService.post('wap', wap)
    }
    return savedWap
}

async function saveCmp(wap, cmp, idx) {
    let savedWap
    if (wap.cmps[idx]?.id === cmp.id) {
        wap.cmps[idx] = cmp
        savedWap = await httpService.put(`wap/${wap._id}`, wap)
        // savedWap = storageService.put(STORAGE_KEY, wap)
    } else {
        // Change cmp id so the cmp in sidebar and wap wont be similar
        const cmpCopy = { ...cmp }
        cmpCopy.id = utilService.makeId()
        wap.cmps.splice(idx, 0, cmpCopy)
        savedWap = await httpService.put(`wap/${wap._id}`, wap)
        // savedWap = await storageService.put(STORAGE_KEY, wap)
    }
    return savedWap
}

function increaseViewCount(wap) {
    // console.log('wap:',wap._id)
    return httpService.put(`wap/${wap._id}/increaseview`, wap)
  }

function getCmpsByType(type) {
    return httpService.get(`wap/${type}/cmps`)

    // if (mapCmpByCategory[category]) return mapCmpByCategory[category]
}
// function getCmpsByCategory(type) {
//     return httpService.get(`wap/${type}`)

//     // if (mapCmpByCategory[category]) return mapCmpByCategory[category]
// }

// DONE
function getCmpTypes() {
    return ['headers', 'heros', 'about', 'galleries', 'videos', 'forms', 'maps', 'footers']
}



// DONE
function getThemes() {

    return [
        {
            id: utilService.makeId(),
            name: 'Business',
            description: 'Nifty & sophisticated',
            fontFamily: 'forum',
            colors: {
                primary: {
                    backgroundColor: '#11999E',
                    color: '#fff',
                    fill: '#fff',
                },
                secondary: {
                    backgroundColor: '#40514E',
                    color: '#fff',
                    fill: '#fff',
                },
                third: {
                    backgroundColor: '#E4F9F5',
                    color: '#000',
                    fill: '#000',
                },
            },
        },
        {
            id: utilService.makeId(),
            name: 'Vivid',
            description: 'Bright & Expressive',
            fontFamily: 'playfair-regular',
            colors: {
                primary: {
                    backgroundColor: '#F47C7C',
                    color: '#fff',
                    fill: '#fff',
                },
                secondary: {
                    backgroundColor: '#EF9F9F',
                    color: '#000',
                    fill: '#000',
                },
                third: {
                    backgroundColor: '#FAD4D4',
                    color: '#000',
                    fill: '#000',
                },
            },
        },
        {
            id: utilService.makeId(),
            name: 'Earthy',
            description: 'Subtle & Natural',
            fontFamily: 'playfair-regular',
            colors: {
                primary: {
                    backgroundColor: '#F8ECD1',
                    // backgroundColor: '#EC994B',
                    color: '#000',
                    fill: '#000',
                },
                secondary: {
                    backgroundColor: '#DEB6AB',
                    color: '#000',
                    fill: '#000',
                },
                third: {
                    backgroundColor: '#AC7D88',
                    color: '#fff',
                    fill: '#fff',
                },
            },
        },
        {
            id: utilService.makeId(),
            name: 'Creamy',
            description: 'Neutral & Serene',
            fontFamily: 'oswald',
            colors: {
                primary: {
                    backgroundColor: '#628C67',
                    color: '#fff',
                    fill: '#fff',
                },
                secondary: {
                    backgroundColor: '#FDEBC9',
                    color: '#000',
                    fill: '#000',
                },
                third: {
                    backgroundColor: '#ED6C5C',
                    color: '#fff',
                    fill: '#fff',
                },
            },
        },
        {
            id: utilService.makeId(),
            name: 'Laid Back',
            description: 'Pungent & zesty',
            colors: {
                primary: {
                    backgroundColor: '#014235',
                    // backgroundColor: '#EC994B',
                    color: '#fff',
                    fill: '#fff',
                },
                secondary: {
                    backgroundColor: '#C7C7C7',
                    color: '#000',
                    fill: '#000',
                },
                third: {
                    backgroundColor: '#97ADED',
                    color: '#000',
                    fill: '#000',
                },
            },
        },
        {
            id: utilService.makeId(),
            name: 'Calming',
            description: 'Calm & easy-going',
            fontFamily: 'robboto-regular',
            colors: {
                primary: {
                    backgroundColor: '#92B4EC',
                    color: '#484848',
                    fill: '#484848',
                },
                secondary: {
                    backgroundColor: '#FFFFFF',
                    color: '#000',
                    fill: '#000',
                },
            },
        },
        {
            id: utilService.makeId(),
            name: 'Warm',
            description: 'Modern & pleasant',
            fontFamily: 'roboto-regular',
            colors: {
                primary: {
                    backgroundColor: '#C6CCCA',
                    color: '#000',
                    fill: '#000',
                },
                secondary: {
                    backgroundColor: '#F8F4F1',
                    color: '#000',
                    fill: '#000',
                },
                third: {
                    backgroundColor: '#A34A21',
                    color: '#fff',
                    fill: '#fff',
                },
            },
        },
        {
            id: utilService.makeId(),
            name: 'Retro Vibrant',
            description: 'Hip, mod & stylish',
            fontFamily: 'oswald',
            colors: {
                primary: {
                    backgroundColor: 'rgb(11 122 157 / 63%)',
                    color: '#fff',
                    fill: '#fff',
                },
                // rgb(11 122 157 / 63%)
                secondary: {
                    backgroundColor: '#ebe079bd',
                    color: '#000',
                    fill: '#000',
                },
                third: {
                    backgroundColor: '#fff',
                    color: '#000',
                    fill: '#000',
                },
            },
        },
    ]

}

// TO CHECK
function findCmpIdx(parentCmp, cmp) {
    const idx = parentCmp?.cmps?.findIndex((currCmp) => currCmp.id === cmp.id)
    if (idx > -1) {
        return idx
    } else {
        parentCmp?.cmps?.forEach((currCmp) => findCmpIdx(currCmp, cmp))
    }
}

// FOR LOCAL USE
// function _createWaps() {
//     let waps = storageService.loadFromStorage(STORAGE_KEY)
//     if (!waps || !waps.length) {
//         storageService.saveToStorage(STORAGE_KEY, getWapDemos())
//     }
// }

// front service
// VVV query,==> getWaps
// VVV save, ==> addWap && updateWap
// VVV getWapById,==> ''
// VVV getCmpById,==> ''
// vvv removeWap, ==>''
// XXXXXXXXXXXXXXaddWapCmp,==> '' (To remove in back?)
// XXXXXXXXXXXXXXupdateWapCmp,==> ''
// XXXXXXXXXXXXXXremoveWapCmp==> ''
// VVV getCmpsByCategory, ==> getCmpsByCategory
// VVV findCmpIdx,
// VVV getThemes

// To change in rest of front!!!!!!!!
// VVV getWapDemoById
// VVV getCmpsByCategory ==> getCmpsByType
