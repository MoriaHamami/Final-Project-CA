import { utilService } from '../../services/util.service.js'

export const wapContainer2A = {
    id: utilService.makeId(),
    type: 'wap-container',
    name: 'wap-container-2a',
    info: {
        txt: 'What Makes Us Special'
    },
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
                    name: 'wap-card',
                    info: {
                        title: 'Local Expert Guides',
                        subtitle: 'I\'m a title.Click here to add your own text and edit me.',
                        imgUrl:
                        'https://res.cloudinary.com/dimirmc9j/image/upload/v1674060775/container-guide_wc4cyf.png',
                    },
                },
                {
                    type: 'wap-card',
                    id: utilService.makeId(),
                    name: 'wap-card',

                    info: {
                        title:'Handpicked Adventures',
                        subtitle: 'I\'m a title. Click here to add your own text and edit me.',
                        imgUrl:
                            'https://res.cloudinary.com/dimirmc9j/image/upload/v1674060778/container-hidden_kxlflq.png',

                    },
                },
                {
                    type: 'wap-card',
                    id: utilService.makeId(),
                    name: 'wap-card',

                    info: {
                        title: 'Hidden Gem Destinations',
                        subtitle: 'I\'m a title.Click here to add your own text and edit me.',
                        imgUrl:
                            'https://res.cloudinary.com/dimirmc9j/image/upload/v1674060782/container-adventure_n9ejiq.webp',

                    },
                }

            ],
        },

    ],
}
