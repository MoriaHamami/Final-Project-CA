import { utilService } from '../../services/util.service.js'

//   thumbnail: require('../../../assets/img/thumbnails/section/wap-section-1.jpg'),


export const wapContainer1B = {
  id: "wc10b",
  type: "wap-container",
  name: "wap-container-1b",
  info: {},
  theme: "theme-section-happy",
  style: {
    font: "Fontush",
  },
  cmps: [
    {
      type: 'wap-form',
      id: utilService.makeId(),
      name: 'wap-form-1',
      info: {
        title: 'Reservations',
        subtitle: 'BOOK A TABLE',
        inputs:[
          { dataType: 'date', name: 'wap-input', placeholder: '', id: utilService.makeId() },
          { dataType: 'time', name: 'wap-input', placeholder: '', id: utilService.makeId() },
          { dataType: 'number', name: 'wap-input', placeholder: '', id: utilService.makeId() }
        ],
        btn: { label: "Book Now", link: "#wc03", id: utilService.makeId() },
      },

    }
  ]
}


