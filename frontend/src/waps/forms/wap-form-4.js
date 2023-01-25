import { utilService } from "../../services/util.service";

export const wapForm4 = {
    id: utilService.makeId(),
    type: 'wap-form',
    name: 'wap-form-4',
    imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674557656/Webix/wap-form-2_aw6wgw.jpg',

    info: {
        title: { txt: 'BE IN', style: { fontSize: '1.1em', letterSpacing: '0.3em', lineHeight: '1.4em', color: 'white' }, id: utilService.makeId(), type: 'txt' },
        subtitle: { txt: 'TOUCH', style: { fontSize: '2.8em', letterSpacing: '0.3em', lineHeight: '1.4em', color: 'white' }, id: utilService.makeId(), type: 'txt' },
        txt: { txt: 'Please fill your contact details below:', style: { fontSize: '1.3em' }, id: utilService.makeId(), type: 'txt' },
        inputs: [
            { dataType: 'text', name: 'wap-input', placeholder: 'Name', id: utilService.makeId(), style: {}, type: 'input' },
            { dataType: 'text', name: 'wap-input', placeholder: 'Email', id: utilService.makeId(), style: {}, type: 'input' },
            { dataType: 'text', name: 'wap-input', placeholder: 'Subject', id: utilService.makeId(), style: {}, type: 'input' },
        ],
        btn: { label: 'Send', link: '#wc03', style: { backgroundColor: '#34d1b6', color: 'white' }, type: 'btn' },
    },
    theme: 'theme-section-happy',
    style: {
        fontFamily: 'roboto-regular',
    }
}


