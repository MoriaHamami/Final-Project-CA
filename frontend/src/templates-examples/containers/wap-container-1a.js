import { utilService } from '../../services/util.service.js'

export const wapContainer1A = {
    id: "wc10a",
    type: "wap-container",
    name: "wap-container-1a",
    info: {},
    // type: 'container',
    // name: 'wap-cards-1',
    // themePalette: 'primary',
    // category: 'cards',
    theme: "theme-header-happy",
    thumbnail: 'https://i.postimg.cc/7h0qq8v4/wap-cards-1.png',
    style: {},
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
