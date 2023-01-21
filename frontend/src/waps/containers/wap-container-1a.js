import { utilService } from '../../services/util.service.js'

export const wapContainer1A = {
    id: utilService.makeId(),
    type: 'wap-container',
    name: 'wap-container-1a',
    info: {},
    theme: 'theme-header-happy',
    thumbnail: 'https://i.postimg.cc/7h0qq8v4/wap-cards-1.png',
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
                            url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030131/card-img-1_tkzkif.webp',
                            title: '',
                            txt: ''
                        },
                        {
                            url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030130/card-img-7_u3vjoc.jpg',
                            title: '',
                            txt: ''
                        },
                        {
                            url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030130/card-img-3_nt8pvb.jpg',
                            title: '',
                            txt: ''
                        },
                        {
                            url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030130/card-img-8_a5pr2p.jpg',
                            title: '',
                            txt: ''
                        },
                        {
                            url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030130/card-img-6_rxv4ii.jpg',
                            title: '',
                            txt: ''
                        },
                        {
                            url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030130/card-img-4_bxzn7k.jpg',
                            title: '',
                            txt: ''
                        },
                        {
                            url: 'https://res.cloudinary.com/tf-lab/image/upload/restaurant/51f12210-940b-465f-a6c4-8208da1330b9/468ab0f6-2c22-487d-b6d2-dd1f07433e9d.jpg',
                            title: '',
                            txt: ''
                        },
                        {
                            url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030130/card-img-2_k87gbe.jpg',
                            title: '',
                            txt: ''
                        },
                    ]

                },

            ],
        }
    ]
}
