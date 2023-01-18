import { utilService } from '../../services/util.service.js'

//   thumbnail: require('../../../assets/img/thumbnails/section/wap-section-2.jpg'),


export const wapContainer2B = {
  id: "wc20b",
  type: "wap-container",
  name: "wap-container-2b",
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
      name: 'wap-form-2',
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


