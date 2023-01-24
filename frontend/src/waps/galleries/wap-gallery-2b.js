import { utilService } from '../../services/util.service.js'

//   thumbnail: require('../../../assets/img/thumbnails/section/wap-section-2.jpg'),


export const wapGallery2B = {
  id: utilService.makeId(),
  type: 'wap-galery',
  name: 'wap-gallery-2b',
  theme: 'theme-section-happy',
  style: {
    fontFamily: 'handlee',
  },
  info: {
    subtitle: {txt: 'Reservations', type: 'txt', id: utilService.makeId(), type: 'txt', style: {}},
    title: {txt: 'BOOK A TABLE', type: 'txt', id: utilService.makeId(), type: 'txt', style: {}},
    btn: { label: 'Book Now', link: '#wc03', type: 'btn', id: utilService.makeId(), type: 'btn', style: {} },
    photos: 
        [{
            url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063387/card8_wm0gfc.jpg',
            title: { txt: '', id: utilService.makeId(), style: {}, type: 'txt' },
            subtitle: { txt: '', id: utilService.makeId(), style: {}, type: 'txt' },
            type: 'img',
            style: {},
            id: utilService.makeId()
        },
        {
            url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063404/card4_whirwv.jpg',
            title: { txt: '', id: utilService.makeId(), style: {}, type: 'txt' },
            subtitle: { txt: '', id: utilService.makeId(), style: {}, type: 'txt' },
            type: 'img',
            style: {},
            id: utilService.makeId()
        },
        {
            url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674317426/card6_nhuv58.jpg',
            title: { txt: '', id: utilService.makeId(), style: {}, type: 'txt' },
            subtitle: { txt: '', id: utilService.makeId(), style: {}, type: 'txt' },
            type: 'img',
            style: {},
            id: utilService.makeId()
        },
        {
            url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063393/card11_uynqjs.webp',
            title: { txt: '', id: utilService.makeId(), style: {}, type: 'txt' },
            subtitle: { txt: '', id: utilService.makeId(), style: {}, type: 'txt' },
            type: 'img',
            style: {},
            id: utilService.makeId()
        }]
    }
}
        // id: utilService.makeId(),
        // type: 'gallery',
        

    
// export const wapContainer2B = {
//   id: utilService.makeId(),
//   type: 'wap-container',
//   name: 'wap-container-2b',
//   info: {
//     subtitle: 'Reservations',
//     title: 'BOOK A TABLE',
//     btn: { label: 'Book Now', link: '#wc03', id: utilService.makeId() },
//   },
//   theme: 'theme-section-happy',
//   style: {
//     fontFamily: 'handlee',
//   },
//   cmps: [
//     {
//         type: 'wap-container',
//         id: utilService.makeId(),
//         name: 'gallery-container',
        
//         cmps: [
//             {
//                 type: 'wap-gallery',
//                 id: utilService.makeId(),
//                 name: 'gallery-container',
//                 style: {},
//                 photos: [
//                     {
//                         url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063387/card8_wm0gfc.jpg',
//                         title: '',
//                         txt: ''
//                     },
//                     {
//                         url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063404/card4_whirwv.jpg',
//                         title: '',
//                         txt: ''
//                     },
//                     {
//                         url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674317426/card6_nhuv58.jpg',
//                         title: '',
//                         txt: ''
//                     },
//                     {
//                         url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063393/card11_uynqjs.webp',
//                         title: '',
//                         txt: ''
//                     }
//                 ]
//                 }
//                 ]
//     },
    
// ],
// }


