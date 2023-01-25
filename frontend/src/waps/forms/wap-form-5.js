import { utilService } from "../../services/util.service";

export const wapForm5 = {
    id: utilService.makeId(),
    type: 'wap-form',
    name: 'wap-form-5',
    imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674557656/Webix/wap-form-2_aw6wgw.jpg',

    info: {
        title: { txt: 'Touch Base', style: { fontFamily: 'playfair-regular', fontSize: '8.1em', letterSpacing: '0.1em', lineHeight: '1.4em', color: 'rgb(216 182 182)', fontWeight:'100' }, id: utilService.makeId(), type: 'txt', key: 'title' },
        subtitle: { txt: 'Be in touch to book a free makeup consultation!', style: { fontFamily: 'roboto-light', fontSize: '1em', letterSpacing: '0.1em', lineHeight: '1.4em', color: 'black' }, id: utilService.makeId(), type: 'txt', key: 'subtitle' },
        txt: { txt: 'Please fill your contact details below:', style: { fontSize: '1em', color: 'white' }, id: utilService.makeId(), type: 'txt', key: 'txt' },
        inputs: [
            { dataType: 'text', name: 'wap-input', placeholder: 'Name', id: utilService.makeId(), style: {}, type: 'input', key: 'inputs' },
            { dataType: 'text', name: 'wap-input', placeholder: 'Email', id: utilService.makeId(), style: {}, type: 'input', key: 'inputs' },
            { dataType: 'text', name: 'wap-input', placeholder: 'Subject', id: utilService.makeId(), style: {}, type: 'input', key: 'inputs' },
        ],
        btn: { label: 'Send', link: '#wc03', style: { backgroundColor: 'rgb(216 182 182)', color: 'white' }, type: 'btn', key: 'btn' },
    },
    theme: 'theme-section-happy',
    style: {
        fontFamily: 'roboto-light',
    }
}
