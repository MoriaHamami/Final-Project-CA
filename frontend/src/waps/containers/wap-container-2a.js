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
    style: {
        fontFamily: 'handlee',
    },
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
                            url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674060775/container-guide_wc4cyf.png',
                            title: 'Local Expert Guides',
                            txt: 'I\'m a title.Click here to add your own text and edit me.'
                        },
                        {
                            url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674060778/container-hidden_kxlflq.png',
                            title: 'Handpicked Adventures',
                            txt: 'I\'m a title. Click here to add your own text and edit me.'
                        },
                        {
                            url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674060782/container-adventure_n9ejiq.webp',
                            title: 'Hidden Gem Destinations',
                            txt: 'I\'m a title.Click here to add your own text and edit me.'
                        }
                    ]
                }
            ]

        },

    ],
}
