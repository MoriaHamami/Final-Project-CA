import { utilService } from '../../services/util.service.js'

export const wapContainer2A = {
    id: 'wc20a',
    type: 'wap-container',
    name: 'wap-container-2a',
    info: {
        txt: 'What Makes Us Special'
    },
    // type: 'container',
    // name: 'wap-cards-1',
    // themePalette: 'primary',
    // category: 'cards',
    theme: 'theme-header-happy',
    thumbnail: 'https://i.postimg.cc/7h0qq8v4/wap-cards-1.png',
    style: {},
    cmps: [,
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
                        title: 'Local Expert Guides',
                        subtitle: 'I\'m a title.Click here to add your own text and edit me.',
                        imgUrl:
                        'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030131/card-img-1_tkzkif.webp',
                    },
                },
                {
                    type: 'wap-card',
                    id: utilService.makeId(),
                    name: 'cards-container',

                    info: {
                        title:'Handpicked Adventures',
                        subtitle: 'I\'m a title. Click here to add your own text and edit me.',
                        imgUrl:
                            'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030130/card-img-7_u3vjoc.jpg',

                    },
                },
                {
                    type: 'wap-card',
                    id: utilService.makeId(),
                    name: 'cards-container',

                    info: {
                        title: 'Hidden Gem Destinations',
                        subtitle: 'I\'m a title.Click here to add your own text and edit me.',
                        imgUrl:
                            'https://res.cloudinary.com/dimirmc9j/image/upload/v1674030130/card-img-3_nt8pvb.jpg',

                    },
                }

            ],
        },

    ],
}
