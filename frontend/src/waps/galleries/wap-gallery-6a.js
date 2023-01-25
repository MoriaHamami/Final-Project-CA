import { utilService } from '../../services/util.service.js'

export const wapGallery6A= {
    id: utilService.makeId(),
    type: 'wap-gallery',
    name: 'wap-gallery-6a',
    imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674557656/Webix/wap-gallery-2a_zzwqzw.jpg',

    info: {
        title: {txt: 'MEET THE TEAM', type: 'txt', id: utilService.makeId(), style: {fontFamily: 'mont-heavy', color:'white', fontSize:'2.4rem',letterSpacing: '0.3em'}},
        photos: [
            {
                url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674639070/%D7%A2%D7%99%D7%A6%D7%95%D7%91_%D7%9C%D7%9C%D7%90_%D7%A9%D7%9D_4_nbr103.png',
                title: { txt: 'DR. DAVID KANE', id: utilService.makeId(), style: {fontFamily: 'mont-heavy', color:'white', fontSize:'1.1rem', lineHeight:'1.4em'}, type: 'txt' },
                subtitle: { txt: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.", id: utilService.makeId(), style: {color:'white', fontSize:'0.8rem', lineHeight:'1.7em'}, type: 'txt' },
                type: 'img',
                id: utilService.makeId()
            },
            {
                url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674639074/%D7%A2%D7%99%D7%A6%D7%95%D7%91_%D7%9C%D7%9C%D7%90_%D7%A9%D7%9D_5_v4csxo.png',
                title: { txt: 'DR. LYNN FADER', id: utilService.makeId(), style: {fontFamily: 'mont-heavy', color:'white', fontSize:'1.1rem', lineHeight:'1.4em'}, type: 'txt' },
                subtitle: { txt: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.", id: utilService.makeId(), style: {color:'white', fontSize:'0.8rem', lineHeight:'1.7em'}, type: 'txt' },
                type: 'img',
                style: {},
                id: utilService.makeId()
            },
        ]
    },
    theme: 'theme-header-happy',
    thumbnail: 'https://i.postimg.cc/7h0qq8v4/wap-cards-1.png',
    style: {
        fontFamily: 'roboto-light',
    }
}