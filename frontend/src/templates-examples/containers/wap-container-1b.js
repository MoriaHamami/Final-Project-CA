import { utilService } from '../../services/util.service.js'

//   thumbnail: require('../../../assets/img/thumbnails/section/wap-section-1.jpg'),


export const wapContainer1B = {
  id: "wc10b",
  type: "wap-container",
  name: "wap-container-1b",
  info: {
    subtitle: 'Reservations',
    title: 'BOOK A TABLE',
    btn: { label: "Book Now", link: "#wc03" },
  },
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
        subtitle: 'Reservations',
        title: 'BOOK A TABLE',
        inputs:[
          { dataType: 'date', name: 'wap-input', placeholder: '' },
          { dataType: 'time', name: 'wap-input', placeholder: '' },
          { dataType: 'number', name: 'wap-input', placeholder: '' }
        ],
        btn: { label: "Book Now", link: "#wc03" },
      },

    }
  ]
}


