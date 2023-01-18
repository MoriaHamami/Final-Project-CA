import { utilService } from '../../services/util.service.js'

//   thumbnail: require('../../../assets/img/thumbnails/section/wap-section-2.jpg'),


export const wapContainer2B = {
  id: "wc20b",
  type: "wap-container",
  name: "wap-container-2b",
  info: {
    subtitle: 'Reservations',
    title: 'BOOK A TABLE',
    btn: { label: "Book Now", link: "#wc03" },
  },
  theme: "theme-section-happy",
  style: {
    font: "Fontush",
  },
  cmps: [
    {
        type: 'wap-container',
        id: utilService.makeId(),
        name: 'cards-container',
        
        cmps: [
            {
                type: 'wap-card',
                id: utilService.makeId(),
                name: 'cards-container',
                info: {
                    imgUrl:
                        'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030131/card-img-1_tkzkif.webp',

                },
            },
            {
                type: 'wap-card',
                id: utilService.makeId(),
                name: 'cards-container',

                info: {
                    imgUrl:
                    'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030130/card-img-7_u3vjoc.jpg',

                },
            },
            {
                type: 'wap-card',
                id: utilService.makeId(),
                name: 'cards-container',

                info: {
                    imgUrl:
                    'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030130/card-img-3_nt8pvb.jpg',

                },
            },
            {
                type: 'wap-card',
                id: utilService.makeId(),
                name: 'cards-container',

                info: {
                    imgUrl:
                    'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030130/card-img-8_a5pr2p.jpg',

                },
            },
            {
                type: 'wap-card',
                id: utilService.makeId(),
                name: 'cards-container',

                info: {
                    imgUrl:
                    'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030130/card-img-6_rxv4ii.jpg',

                },
            },
            {
                type: 'wap-card',
                id: utilService.makeId(),
                name: 'cards-container',

                info: {
                    imgUrl:
                    'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030130/card-img-4_bxzn7k.jpg',

                },
            },
            {
                type: 'wap-card',
                id: utilService.makeId(),
                name: 'cards-container',

                info: {
                    imgUrl:
                    'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030130/card-img-5_k00sxt.jpg',

                },
            },
            {
                type: 'wap-card',
                id: utilService.makeId(),
                name: 'cards-container',

                info: {
                    imgUrl:
                    'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030130/card-img-2_k87gbe.jpg',

                },
            },

        ],
    },
    
],
}


