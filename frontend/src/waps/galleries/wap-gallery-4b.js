import { utilService } from '../../services/util.service.js'

export const wapGallery4B = {
    id: utilService.makeId(),
    type: 'wap-gallery',
    name: 'wap-gallery-4b',
    imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674557656/Webix/wap-gallery-2a_zzwqzw.jpg',

    info: {
        title: { txt: 'CASE', type: 'txt', id: utilService.makeId(), style: { fontFamily: 'open-sans',color: 'black', fontSize: '1.1rem', letterSpacing: '0.3em' }, key: 'title' },
        subtitle: { txt: 'STUDIES', id: utilService.makeId(), type: 'txt', style: { fontFamily: 'open-sans', color: '#34d1b6', letterSpacing: '0.3em', fontSize: '2.75rem' }, key: 'subtitle' },
        photos: [
            {
                photo: {url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674599225/democar4_e5wh0i.png', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
                
                // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674599225/democar4_e5wh0i.png',
                // title: {},
                // subtitle: {},
                // type: 'img',
                // style: {},
                // id: utilService.makeId()
            },
            {
                photo: {url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674599225/democard3_xxnshd.png', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
                // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674599225/democard3_xxnshd.png',
                // title: {},
                // subtitle: {},
                // type: 'img',
                // style: {},
                // id: utilService.makeId()
            },
            {
                photo: {url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674599164/democard2_mfw2bq.png', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
                // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674599164/democard2_mfw2bq.png',
                // title: {},
                // subtitle: {},
                // type: 'img',
                // style: {},
                // id: utilService.makeId()
            },
            {
                photo: {url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674599164/democard1_ll4cwb.png', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
                // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674599164/democard1_ll4cwb.png',
                // title: {},
                // subtitle: {},
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