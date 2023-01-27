import { utilService } from '../../services/util.service.js'

export const wapGallery5C = {
    id: utilService.makeId(),
    type: 'wap-gallery',
    name: 'wap-gallery-5c',
    themePalette: 'third',
    imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674861731/Webix/wap-gallery-5c_s03ios.jpg',

    info: {
        photos: [
            {
                photo: { url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674658782/hero_demo5_b5vhk8.png', style: {}, id: utilService.makeId(), type: 'img', key: 'photos' },
            }
        ]
    },
    // theme: 'theme-header-happy',
    thumbnail: 'https://i.postimg.cc/7h0qq8v4/wap-cards-1.png',
    style: {
        fontFamily: 'roboto-light',
    }
}