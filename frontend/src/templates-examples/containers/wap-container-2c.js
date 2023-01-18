import { utilService } from '../../services/util.service.js'

//   thumbnail: require('../../../assets/img/thumbnails/section/wap-section-2.jpg'),


export const wapContainer2C = {
  id: "wc20c",
  type: "wap-container",
  name: "wap-container-2c",
  info: {},
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
        title: 'Ask Us Anything',
        subtitle: 'info@mysite.com | 123-456-7890',
        inputs:[
          { dataType: 'text', name: 'wap-input', placeholder: 'Name' },
          { dataType: 'text', name: 'wap-input', placeholder: 'Email' },
          { dataType: 'text', name: 'wap-input', placeholder: 'Subject' },
          { dataType: 'text', name: 'wap-input', placeholder: 'Type your message here...' }
        ],
        btn: { label: "Submit", link: "#wc03" },
      },

    }
  ]
}


