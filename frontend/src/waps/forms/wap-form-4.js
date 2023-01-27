import { utilService } from "../../services/util.service";

export const wapForm4 = {
    id: utilService.makeId(),
    type: 'wap-form',
    name: 'wap-form-4',
    themePalette: 'secondary',
    imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674680444/Webix/wap-form-4_k54tya.jpg',

    info: {
        title: { txt: 'BE IN', style: { fontFamily: 'open-sans', fontSize: '1.1em', letterSpacing: '0.3em', lineHeight: '1.4em', color: 'white' }, id: utilService.makeId(), type: 'txt', key: 'title' },
        subtitle: { txt: 'TOUCH', style: { fontFamily: 'open-sans', fontSize: '2.8em', letterSpacing: '0.3em', lineHeight: '1.4em', color: 'white' }, id: utilService.makeId(), type: 'txt', key: 'subtitle' },
        txt: { txt: 'Please fill your contact details below:', style: { fontSize: '1em', color: 'white' }, id: utilService.makeId(), type: 'txt', key: 'txt' },
        inputs: [
            { dataType: 'text', name: 'wap-input', placeholder: 'Name', id: utilService.makeId(), style: {}, type: 'input', key: 'inputs' },
            { dataType: 'text', name: 'wap-input', placeholder: 'Email', id: utilService.makeId(), style: {}, type: 'input', key: 'inputs' },
            { dataType: 'text', name: 'wap-input', placeholder: 'Subject', id: utilService.makeId(), style: {}, type: 'input', key: 'inputs' },
        ],
        btn: { label: 'Send', link: '#wc03', style: { backgroundColor: '#34d1b6', color: 'white' }, type: 'btn', key: 'btn' },
    },
    // theme: 'theme-section-happy',
    style: {
        fontFamily: 'roboto-light',
    }
}


