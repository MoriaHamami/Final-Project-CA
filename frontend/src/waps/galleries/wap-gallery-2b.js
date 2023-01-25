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
    subtitle: {txt: 'Reservations', type: 'txt', id: utilService.makeId(), type: 'txt', style: {}, key: 'subtitle'},
    title: {txt: 'BOOK A TABLE', type: 'txt', id: utilService.makeId(), type: 'txt', style: {}, key: 'title'},
    btn: { label: 'Book Now', link: '#wc03', type: 'btn', id: utilService.makeId(), type: 'btn', style: {}, key: 'btn' },
    photos: 
        [{
            photo: {url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063387/card8_wm0gfc.jpg', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
            // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063387/card8_wm0gfc.jpg',
            title: { txt: '', id: utilService.makeId(), style: {}, type: 'txt', key: 'photos' },
            subtitle: { txt: '', id: utilService.makeId(), style: {}, type: 'txt', key: 'photos' },
            // type: 'img',
            // style: {},
            // id: utilService.makeId()
        },
        {
            photo: {url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063404/card4_whirwv.jpg', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
            // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063404/card4_whirwv.jpg',
            title: { txt: '', id: utilService.makeId(), style: {}, type: 'txt', key: 'photos' },
            subtitle: { txt: '', id: utilService.makeId(), style: {}, type: 'txt', key: 'photos' },
            // type: 'img',
            // style: {},
            // id: utilService.makeId()
        },
        {
            photo: {url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674317426/card6_nhuv58.jpg', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
            // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674317426/card6_nhuv58.jpg',
            title: { txt: '', id: utilService.makeId(), style: {}, type: 'txt', key: 'photos' },
            subtitle: { txt: '', id: utilService.makeId(), style: {}, type: 'txt', key: 'photos' },
            // type: 'img',
            // style: {},
            // id: utilService.makeId()
        },
        {
            photo: {url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063393/card11_uynqjs.webp', style: {}, id: utilService.makeId(),type: 'img', key: 'photos' },
            // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063393/card11_uynqjs.webp',
            title: { txt: '', id: utilService.makeId(), style: {}, type: 'txt', key: 'photos' },
            subtitle: { txt: '', id: utilService.makeId(), style: {}, type: 'txt', key: 'photos' },
            // type: 'img',
            // style: {},
            // id: utilService.makeId()
        }]
    }
}


