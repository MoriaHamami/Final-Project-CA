import { utilService } from '../../services/util.service.js'

export const wapGallery3 = {
    id: utilService.makeId(),
    type: 'wap-gallery',
    name: 'wap-gallery-3',
    imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674557656/Webix/wap-gallery-2a_zzwqzw.jpg',

    info: {
        title: {txt: 'Services', type: 'txt', id: utilService.makeId(), style: {color:'#a96859', fontSize:'1.5rem', fontFamily: 'playfair-regular', fontStyle: 'italic'}},
        subtitle: {txt: '', id: utilService.makeId(), type: 'txt', style: {color:'#a96859'}},
        btn: {label: 'Read More', link: '', id: utilService.makeId(), type: 'btn', style: {color:'#704F4F', fontSize:'1rem', fontFamily: 'playfair-regular', fontStyle: 'italic'}},
        photos: [
            {
                url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674575346/demo3svg_wiwz0l.png',
                title: { txt: 'Home Visits', id: utilService.makeId(), style: {color:'#a96859', fontFamily: 'playfair-regular', fontStyle: 'italic'}, type: 'txt' },
                subtitle: { txt: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.", id: utilService.makeId(), style: {color:'#a96859'}, type: 'txt' },
                type: 'img',
                id: utilService.makeId()
            },
            {
                url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674575350/demo3svg2_y5utdv.png',
                title: { txt: 'Birth Doula', id: utilService.makeId(), style: {color:'#a96859', fontFamily: 'playfair-regular', fontStyle: 'italic'}, type: 'txt' },
                subtitle: { txt: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.", id: utilService.makeId(), style: {color:'#a96859'}, type: 'txt' },
                type: 'img',
                style: {},
                id: utilService.makeId()
            },
            {
                url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674575353/demo3svg3_j4wxft.png',
                title: { txt: 'Hidden Gem Destinations', id: utilService.makeId(), style: {color:'#a96859', fontFamily: 'playfair-regular', fontStyle: 'italic'}, type: 'txt' },
                subtitle: { txt: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.", id: utilService.makeId(), style: {color:'#a96859'}, type: 'txt' },
                type: 'img',
                id: utilService.makeId()
            }
        ]
    },
    theme: 'theme-header-happy',
    thumbnail: 'https://i.postimg.cc/7h0qq8v4/wap-cards-1.png',
    style: {
        fontFamily: 'roboto-light',
    }
}