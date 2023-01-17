import { utilService } from '../../services/util.service.js'

export const wapCards1 = {
    id: "wc00",
    type: "container",
    name: "wap-card-1",
    theme: "theme-header-happy",
    thumbnail: 'https://i.postimg.cc/7h0qq8v4/wap-cards-1.png',
    style: {},
    cmps: [
        {
            type: 'container',
            id: utilService.makeId(),
            name: 'cards-container',
            info: {
                txt: 'Latest Projects',
            },
            cmps: [
                {
                    type: 'card',
                    id: utilService.makeId(),
                    name: 'cards-container',
                    info: {
                        txt: 'NFT Marketplace app & website design',
                        imgUrl:
                            'https://assets.website-files.com/61ea6abd5724fb064ae5cd40/61ea6bc00c46710f0c92b5a5_image%2016.png',

                    },
                },
                {
                    type: 'card',
                    id: utilService.makeId(),
                    name: 'cards-container',

                    info: {
                        txt: 'A British charity providing critical veterinary support.',
                        imgUrl:
                        'https://assets.website-files.com/61ea6abd5724fb064ae5cd40/61ea6b7272d92a3dbe255cf6_image%2015.png',

                    },
                },
                {
                    type: 'card',
                    id: utilService.makeId(),
                    name: 'cards-container',

                    info: {
                        txt: 'An environmental tech company reducing Co2 worldwide',
                        imgUrl:
                        'https://assets.website-files.com/61ea6abd5724fb064ae5cd40/61ea6acaa592544ef133dd30_altruistiq.png',

                    },
                },
            ],
        },
        
    ],
}
