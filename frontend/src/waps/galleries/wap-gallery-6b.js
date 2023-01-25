import { utilService } from '../../services/util.service.js'

export const wapGallery6B = {
    id: utilService.makeId(),
    type: 'wap-gallery',
    name: 'wap-gallery-6b',
    imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674683979/Webix/wap-gallery-6b_yaclor.jpg',

    info: {
        title: { txt: 'OUR SERVICES', type: 'txt', id: utilService.makeId(), style: { fontFamily: 'mont-heavy', color: 'white', fontSize: '2.3rem', letterSpacing: '0.3em' }, key: 'title' },
        photos: [
            {
                photo: { url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674645101/soccer_x6l3pj.png', style: {}, id: utilService.makeId(), type: 'img', key: 'photos' },
                // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674645101/soccer_x6l3pj.png',
                title: { txt: 'INDIVIDUAL SESSIONS', type: 'txt', id: utilService.makeId(), style: { fontFamily: 'mont-heavy', color: 'white', fontSize: '1.1rem', letterSpacing: '0.3em' }, key: 'photos' },
                btn: { label: 'BOOK NOW', link: '#wc20b', id: utilService.makeId(), style: { fontSize: '1.2em', color: 'black', backgroundColor: 'rgb(232 192 97)', fontFamily: 'mont-heavy' }, type: 'btn', key: 'photos' },
                // type: 'img',
                // style: {},
                // id: utilService.makeId()
            },
            {
                photo: { url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674645101/volleyball_xugon7.png', style: {}, id: utilService.makeId(), type: 'img', key: 'photos' },
                // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674645101/volleyball_xugon7.png',
                title: { txt: 'GROUP SESSIONS', type: 'txt', id: utilService.makeId(), style: { fontFamily: 'mont-heavy', color: 'white', fontSize: '1.1rem', letterSpacing: '0.3em' }, key: 'photos' },
                btn: { label: 'BOOK NOW', link: '#wc20b', id: utilService.makeId(), style: { fontSize: '1.2em', color: 'black', backgroundColor: 'rgb(232 192 97)', fontFamily: 'mont-heavy' }, type: 'btn', key: 'photos' },
                // type: 'img',
                // style: {},
                // id: utilService.makeId()
            },
            {
                photo: { url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674645073/timer_o0c7k3.png', style: {}, id: utilService.makeId(), type: 'img', key: 'photos' },
                // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674645073/timer_o0c7k3.png',
                title: { txt: 'WORKSHOPS & PRESENTATIONS', type: 'txt', id: utilService.makeId(), style: { fontFamily: 'mont-heavy', color: 'white', fontSize: '1.1rem', letterSpacing: '0.3em' }, key: 'photos' },
                btn: { label: 'BOOK NOW', link: '#wc20b', id: utilService.makeId(), style: { fontSize: '1.2em', color: 'black', backgroundColor: 'rgb(232 192 97)', fontFamily: 'mont-heavy' }, type: 'btn', key: 'photos' },
                // type: 'img',
                // style: {},
                // id: utilService.makeId()
            },
        ]
    },
    theme: 'theme-header-happy',
    thumbnail: 'https://i.postimg.cc/7h0qq8v4/wap-cards-1.png',
    style: {
        fontFamily: 'roboto-light',
    }
}