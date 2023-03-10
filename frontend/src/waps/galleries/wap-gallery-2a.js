import { utilService } from '../../services/util.service.js'

export const wapGallery2A = {
    id: utilService.makeId(),
    type: 'wap-gallery',
    name: 'wap-gallery-2a',
    themePalette: 'third',
    imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674557656/Webix/wap-gallery-2a_zzwqzw.jpg',

    info: {
        title: {txt: 'What Makes Us Special', type: 'txt', id: utilService.makeId(), style: {}, key: 'title'},
        subtitle: {txt: '', id: utilService.makeId(), type: 'txt', style: {}, key: 'subtitle'},
        btn: {label: '', link: '', id: utilService.makeId(), type: 'btn', style: {}, key: 'btn'},
        photos: [
            {
                photo: {url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674060775/container-guide_wc4cyf.png', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
                
                // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674060775/container-guide_wc4cyf.png',
                title: { txt: 'Local Expert Guides', id: utilService.makeId(), style: {}, type: 'txt', key: 'photos' },
                subtitle: { txt: 'I\'m a title.Click here to add your own text and edit me.', id: utilService.makeId(), style: {}, type: 'txt', key: 'photos' },
                // type: 'img',
                // id: utilService.makeId()
            },
            {
                photo: {url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674060778/container-hidden_kxlflq.png', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
                // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674060778/container-hidden_kxlflq.png',
                title: { txt: 'Handpicked Adventures', id: utilService.makeId(), style: {}, type: 'txt', key: 'photos' },
                subtitle: { txt: 'I\'m a title. Click here to add your own text and edit me.', id: utilService.makeId(), style: {}, type: 'txt', key: 'photos' },
                // type: 'img',
                // style: {},
                // id: utilService.makeId()
            },
            {
                photo: {url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674060782/container-adventure_n9ejiq.webp', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
                // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674060782/container-adventure_n9ejiq.webp',
                title: { txt: 'Hidden Gem Destinations', id: utilService.makeId(), style: {}, type: 'txt', key: 'photos' },
                subtitle: { txt: 'I\'m a title.Click here to add your own text and edit me.', id: utilService.makeId(), style: {}, type: 'txt', key: 'photos' },
                // type: 'img',
                // id: utilService.makeId()
            }
        ]
    },
    // theme: 'theme-header-happy',
    thumbnail: 'https://i.postimg.cc/7h0qq8v4/wap-cards-1.png',
    style: {
        fontFamily: 'handlee',
    }
}
// export const wapContainer2A = {
//     id: utilService.makeId(),
//     type: 'wap-container',
//     name: 'wap-container-2a',
//     info: {
//         txt: 'What Makes Us Special'
//     },
//     theme: 'theme-header-happy',
//     thumbnail: 'https://i.postimg.cc/7h0qq8v4/wap-cards-1.png',
//     style: {
//         fontFamily: 'handlee',
//     },
//     cmps: [
//         {
//             type: 'wap-container',
//             id: utilService.makeId(),
//             name: 'gallery-container',
//             cmps: [

//                 {
//                     type: 'wap-gallery',
//                     id: utilService.makeId(),
//                     name: 'gallery-container',
//                     style: {},
//                     photos: [
//                         {
//                             url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674060775/container-guide_wc4cyf.png',
//                             title: 'Local Expert Guides',
//                             txt: 'I\'m a title.Click here to add your own text and edit me.'
//                         },
//                         {
//                             url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674060778/container-hidden_kxlflq.png',
//                             title: 'Handpicked Adventures',
//                             txt: 'I\'m a title. Click here to add your own text and edit me.'
//                         },
//                         {
//                             url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674060782/container-adventure_n9ejiq.webp',
//                             title: 'Hidden Gem Destinations',
//                             txt: 'I\'m a title.Click here to add your own text and edit me.'
//                         }
//                     ]
//                 }
//             ]

//         },

//     ],
// }
