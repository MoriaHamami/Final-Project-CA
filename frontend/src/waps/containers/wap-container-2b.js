import { utilService } from '../../services/util.service.js'

//   thumbnail: require('../../../assets/img/thumbnails/section/wap-section-2.jpg'),


export const wapContainer2B = {
  id: utilService.makeId(),
  type: 'wap-container',
  name: 'wap-container-2b',
  info: {
    subtitle: 'Reservations',
    title: 'BOOK A TABLE',
    btn: { label: 'Book Now', link: '#wc03', id: utilService.makeId() },
  },
  theme: 'theme-section-happy',
  style: {},
  cmps: [
    {
        type: 'wap-container',
        id: utilService.makeId(),
        name: 'gallery-container',
        
        cmps: [
            {
                type: 'wap-gallery',
                id: utilService.makeId(),
                name: 'gallery-container',
                style: {},
                photos: [
                    {
                        url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063387/card8_wm0gfc.jpg',
                        title: '',
                        txt: ''
                    },
                    {
                        url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063404/card4_whirwv.jpg',
                        title: '',
                        txt: ''
                    },
                    {
                        url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674055390/hero3-wap-2_peid7t.jpg',
                        title: '',
                        txt: ''
                    },
                    {
                        url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063393/card11_uynqjs.webp',
                        title: '',
                        txt: ''
                    }
                ]
                }
                ]
        //     {
        //         type: 'wap-gallery',
        //         id: utilService.makeId(),
        //         name: 'gallery-container',
        //         info: {
        //             txt: '',
        //             imgUrl:
        //                 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063387/card8_wm0gfc.jpg',

        //         },
        //     },
        //     {
        //         type: 'wap-gallery',
        //         id: utilService.makeId(),
        //         name: 'gallery-container',

        //         info: {
        //             txt: '',
        //             imgUrl:
        //             'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063404/card4_whirwv.jpg',

        //         },
        //     },
        //     {
        //         type: 'wap-gallery',
        //         id: utilService.makeId(),
        //         name: 'gallery-container',

        //         info: {
        //             txt: '',
        //             imgUrl:
        //             'https://res.cloudinary.com/dimirmc9j/image/upload/v1674055390/hero3-wap-2_peid7t.jpg',

        //         },
        //     },
        //     {
        //         type: 'wap-gallery',
        //         id: utilService.makeId(),
        //         name: 'gallery-container',

        //         info: {
        //             txt: '',
        //             imgUrl:
        //             'https://res.cloudinary.com/dimirmc9j/image/upload/v1674063393/card11_uynqjs.webp',

        //         },
        //     },
            

        // ],
    },
    
],
}


