import { utilService } from '../../services/util.service.js'

export const wapHeader5 = {
    id: utilService.makeId(),
    type: 'wap-header',
    name: 'wap-header-5',
    themePalette: 'secondary',
    imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674688253/Webix/wap-header-5_kyxgx1.jpg',
    info: {
        logo: { txt: 'GOMOBILEROWEN NIKEL | MAKEUP ARTIST', style: { fontSize: '1em', fontWeight: '600', color: 'black', letterSpacing: '0.1em' }, id: utilService.makeId(), type: 'txt', key: 'logo' },
        btns: [
            { label: 'About', link: '#wc24', id: utilService.makeId(), style: { fontSize: '0.85em', color: 'black' }, type: 'btn', key: 'btns' },
            { label: 'Services', link: '#wc23', id: utilService.makeId(), style: { fontSize: '0.85em', color: 'black' }, type: 'btn', key: 'btns' },
            { label: 'Portfolio', link: '#wc25', id: utilService.makeId(), style: { fontSize: '0.85em', color: 'black' }, type: 'btn', key: 'btns' },
            { label: 'Contact', link: '#wc26', id: utilService.makeId(), style: { fontSize: '0.85em', color: 'black' }, type: 'btn', key: 'btns' }
        ],
    },
    // theme: 'theme-header-happy',
    style: {
        fontFamily: 'roboto-light',
    }
}
