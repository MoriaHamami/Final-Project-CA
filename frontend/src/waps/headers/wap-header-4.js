import { utilService } from '../../services/util.service.js'

export const wapHeader4 = {
    id: utilService.makeId(),
    type: 'wap-header',
    name: 'wap-header-4',
    imgUrl: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674323590/header2_cqdk4t.png',
    info: {
        logo: { txt: 'GOMOBILE', style: { fontFamily: 'open-sans', fontSize: '1em',fontWeight: '600', color: '#34d1b6', letterSpacing: '0.3em' }, id: utilService.makeId(), type: 'txt', key: 'logo' },
        btns: [
            { label: 'Services', link: '#wc23', id: utilService.makeId(), style: { fontSize: '0.8em', color: '#34d1b6' }, type: 'btn', key: 'btns' },
            { label: 'About', link: '#wc24', id: utilService.makeId(), style: { fontSize: '0.8em', color: '#34d1b6' }, type: 'btn', key: 'btns' },
            { label: 'Work', link: '#wc25', id: utilService.makeId(), style: { fontSize: '0.8em', color: '#34d1b6' }, type: 'btn', key: 'btns' },
            { label: 'Contact', link: '#wc26', id: utilService.makeId(), style: { fontSize: '0.8em', color: '#34d1b6' }, type: 'btn', key: 'btns' }
        ],
    },
    theme: 'theme-header-happy',
    style: {
        fontFamily: 'roboto-light',
    }
}
