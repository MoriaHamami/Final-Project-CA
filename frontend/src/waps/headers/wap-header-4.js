import { utilService } from '../../services/util.service.js'

export const wapHeader4 = {
    id: utilService.makeId(),
    type: 'wap-header',
    name: 'wap-header-4',
    imgUrl: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674323590/header2_cqdk4t.png',
    info: {
        logo: { txt: 'GOMOBILE', style: { fontSize: '1em',fontWeight: '600', color: '#34d1b6', letterSpacing: '0.3em' }, id: utilService.makeId(), type: 'txt' },
        btns: [
            { label: 'Services', link: '#wc23', id: utilService.makeId(), style: { fontSize: '0.8em', color: '#34d1b6' }, type: 'btn' },
            { label: 'About', link: '#wc24', id: utilService.makeId(), style: { fontSize: '0.8em', color: '#34d1b6' }, type: 'btn' },
            { label: 'Work', link: '#wc25', id: utilService.makeId(), style: { fontSize: '0.8em', color: '#34d1b6' }, type: 'btn' },
            { label: 'Contact', link: '#wc26', id: utilService.makeId(), style: { fontSize: '0.8em', color: '#34d1b6' }, type: 'btn' }
        ],
    },
    theme: 'theme-header-happy',
    style: {
        fontFamily: 'roboto-light',
    }
}
