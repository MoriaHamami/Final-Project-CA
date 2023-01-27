import { utilService } from '../../services/util.service.js'

export const wapGallery5A = {
    id: utilService.makeId(),
    type: 'wap-gallery',
    name: 'wap-gallery-5a',  
    themePalette: 'third',
    imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674688191/Webix/wap-gallery-5a_geyvb7.jpg',

    info: {
        title: { txt: 'SERVICES', type: 'txt', id: utilService.makeId(), style: { color: 'white', fontSize: '3.25rem' }, key: 'title' },
        subtitle: { txt: '', id: utilService.makeId(), type: 'txt', style: {}, key: 'subtitle' },
        btn: { label: '', link: '', id: utilService.makeId(), type: 'btn', style: {}, key: 'btn' },
        photos: [
            {
                photo: { url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674661662/%D7%A9%D7%93%D7%92%D7%A9%D7%92_xeihm6.png', style: {}, id: utilService.makeId(), type: 'img', key: 'photos' },
                // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674661662/%D7%A9%D7%93%D7%92%D7%A9%D7%92_xeihm6.png',
                title: { txt: 'EVENTS', id: utilService.makeId(), style: { fontFamily: 'playfair-regular' }, type: 'txt', key: 'photos' },
                subtitle: { txt: 'I\'m a title.Click here to add your own text and edit me.', id: utilService.makeId(), style: {}, type: 'txt', key: 'photos' },
                // type: 'img',
                // id: utilService.makeId()
            },
            {
                photo: { url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674661664/%D7%93%D7%92%D7%9B%D7%93%D7%92%D7%9B_zcgszs.png', style: {}, id: utilService.makeId(), type: 'img', key: 'photos' },
                // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674661664/%D7%93%D7%92%D7%9B%D7%93%D7%92%D7%9B_zcgszs.png',
                title: { txt: 'CREATIVE', id: utilService.makeId(), style: { fontFamily: 'playfair-regular' }, type: 'txt', key: 'photos' },
                subtitle: { txt: 'I\'m a title. Click here to add your own text and edit me.', id: utilService.makeId(), style: {}, type: 'txt', key: 'photos' },
                // type: 'img',
                // style: {},
                // id: utilService.makeId()
            },
            {
                photo: { url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674661661/%D7%A9%D7%92%D7%A9%D7%93%D7%A9_op29bv.png', style: {}, id: utilService.makeId(), type: 'img', key: 'photos' },
                // url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674661661/%D7%A9%D7%92%D7%A9%D7%93%D7%A9_op29bv.png',
                title: { txt: 'FASHION', id: utilService.makeId(), style: { fontFamily: 'playfair-regular' }, type: 'txt', key: 'photos' },
                subtitle: { txt: 'I\'m a title.Click here to add your own text and edit me.', id: utilService.makeId(), style: {}, type: 'txt', key: 'photos' },
                // type: 'img',
                // id: utilService.makeId()
            }
        ]
    },
    // theme: 'theme-header-happy',
    thumbnail: 'https://i.postimg.cc/7h0qq8v4/wap-cards-1.png',
    style: {
        fontFamily: 'roboto-light',
    }
}