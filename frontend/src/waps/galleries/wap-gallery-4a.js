import { utilService } from '../../services/util.service.js'

export const wapGallery4A = {
    id: utilService.makeId(),
    type: 'wap-gallery',
    name: 'wap-gallery-4a',
    imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674557656/Webix/wap-gallery-2a_zzwqzw.jpg',

    info: {
        title: {txt: 'OUR', type: 'txt', id: utilService.makeId(), style: {fontFamily: 'open-sans', color:'black', fontSize:'1.1rem',letterSpacing: '0.3em'}, key: 'title'},
        subtitle: {txt: 'SERVICES', id: utilService.makeId(), type: 'txt', style: {fontFamily: 'open-sans', color:'#34d1b6',letterSpacing: '0.3em', fontSize:'2.75rem'}, key: 'subtitle'},
        photos: [
            {
                photo: {url: '', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
                // url: '',
                // title: {},
                // subtitle: {},
                // type: 'img',
                // id: utilService.makeId()
            },
            {
                photo: {url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674585993/demo4gallery1_dfws6k.png', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
                // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674585993/demo4gallery1_dfws6k.png',
                title: { txt: 'CREATE STRATEGY', id: utilService.makeId(), style: {fontFamily: 'open-sans', color:'black', fontSize:'1.1rem', lineHeight:'1.4em'}, type: 'txt', key: 'photos' },
                subtitle: { txt: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.", id: utilService.makeId(), style: {color:'black', fontSize:'0.8rem', lineHeight:'1.7em'}, type: 'txt', key: 'photos' },
                // type: 'img',
                // id: utilService.makeId()
            },
            {
                photo: {url: '', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
                // url: '',
                // title: {},
                // subtitle: {},
                // type: 'img',
                // id: utilService.makeId()
            },
            {
                photo: {url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674585993/demo4gallery2_jf1ffv.png', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
                // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674585993/demo4gallery2_jf1ffv.png',
                title: { txt: 'ANALYTICS', id: utilService.makeId(), style: {fontFamily: 'open-sans',color:'black', fontSize:'1.1rem', lineHeight:'1.4em'}, type: 'txt' },
                subtitle: { txt: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.", id: utilService.makeId(), style: {color:'black', fontSize:'0.8rem', lineHeight:'1.7em'}, type: 'txt' },
                // type: 'img',
                // style: {},
                // id: utilService.makeId()
            },
            {
                photo: {url: '', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
                // url: '',
                // title: {},
                // subtitle: {},
                // type: 'img',
                // id: utilService.makeId()
            },
            {
                photo: {url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674585993/demo4gallery3_fh3xvt.png', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
                // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674585993/demo4gallery3_fh3xvt.png',
                title: { txt: 'PAYMENT METHODS', id: utilService.makeId(), style: {fontFamily: 'open-sans', color:'black', fontSize:'1.1rem', lineHeight:'1.4em'}, type: 'txt' },
                subtitle: { txt: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.", id: utilService.makeId(), style: {color:'black', fontSize:'0.8rem', lineHeight:'1.7em'}, type: 'txt' },
                // type: 'img',
                // id: utilService.makeId()
            },
            {
                photo: {url: '', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
                // url: '',
                // title: {},
                // subtitle: {},
                // type: 'img',
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