import { utilService } from '../../services/util.service.js'

export const wapForm1 = {
    id: utilService.makeId(),
    type: 'wap-form',
    name: 'wap-form-1',
    info: {
        title: { txt: 'Reservations', style: {}, id: utilService.makeId(), type: 'txt', key: 'title' },
        subtitle: { txt: 'BOOK A TABLE', style: {}, id: utilService.makeId(), type: 'txt', key: 'subtitle' },
        inputs: [
            { dataType: 'date', name: 'wap-input', placeholder: '', id: utilService.makeId(), style: {}, type: 'input', key: 'inputs' },
            { dataType: 'time', name: 'wap-input', placeholder: '', id: utilService.makeId(), style: {}, type: 'input', key: 'inputs' },
            { dataType: 'number', name: 'wap-input', placeholder: '', id: utilService.makeId(), style: {}, type: 'input', key: 'inputs' }
        ],
        btn: { label: 'Book Now', link: '#wc03', id: utilService.makeId(), style: {}, type: 'btn', key: 'btn' },
    },
    theme: 'theme-section-happy',
    style: {
        fontFamily: 'fe-serif',
    }
}
 


