import { utilService } from '../../services/util.service.js'

//   thumbnail: require('../../../assets/img/thumbnails/section/wap-section-1.jpg'),


export const wapContainer1B = {
  id: utilService.makeId(),
  type: 'wap-container',
  name: 'wap-container-1b',
  info: {},
  theme: 'theme-section-happy',
  style: {},
  cmps: [
    {
      type: 'wap-form',
      id: utilService.makeId(),
      name: 'wap-form-1',
      info: {
        title: { txt: 'Reservations', style: {}, id: utilService.makeId(), },
        subtitle: { txt: 'BOOK A TABLE', style: {}, id: utilService.makeId(), },
        inputs: [
          { dataType: 'date', name: 'wap-input', placeholder: '', id: utilService.makeId(), style: {} },
          { dataType: 'time', name: 'wap-input', placeholder: '', id: utilService.makeId(), style: {} },
          { dataType: 'number', name: 'wap-input', placeholder: '', id: utilService.makeId(), style: {} }
        ],
        btn: { label: 'Book Now', link: '#wc03', id: utilService.makeId(), style: {} },
      },

    }
  ]
}


