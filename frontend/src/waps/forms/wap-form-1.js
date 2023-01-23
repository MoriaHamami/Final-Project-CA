import { utilService } from '../../services/util.service.js'

export const wapForm1 = {
    id: utilService.makeId(),
    type: 'wap-form',
    name: 'wap-form-1',
    info: {
        title: { txt: 'Reservations', style: {}, id: utilService.makeId(), type: 'txt' },
        subtitle: { txt: 'BOOK A TABLE', style: {}, id: utilService.makeId(), type: 'txt' },
        inputs: [
            { dataType: 'date', name: 'wap-input', placeholder: '', id: utilService.makeId(), style: {}, type: 'input' },
            { dataType: 'time', name: 'wap-input', placeholder: '', id: utilService.makeId(), style: {}, type: 'input' },
            { dataType: 'number', name: 'wap-input', placeholder: '', id: utilService.makeId(), style: {}, type: 'input' }
        ],
        btn: { label: 'Book Now', link: '#wc03', id: utilService.makeId(), style: {}, type: 'btn' },
    },
    theme: 'theme-section-happy',
    style: {
        fontFamily: 'fe-serif',
    }
}
 


