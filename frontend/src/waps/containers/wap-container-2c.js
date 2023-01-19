import { utilService } from '../../services/util.service.js'

//   thumbnail: require('../../../assets/img/thumbnails/section/wap-section-2.jpg'),


export const wapContainer2C = {
  id: utilService.makeId(),
  type: 'wap-container',
  name: 'wap-container-2c',
  info: {},
  theme: 'theme-section-happy',
  style: {},
  cmps: [
    {
      type: 'wap-form',
      id: utilService.makeId(),
      name: 'wap-form-2',
      info: {
        title: 'Ask Us Anything',
        subtitle: 'info@mysite.com | 123-456-7890',
        inputs:[
          { dataType: 'text', name: 'wap-input', placeholder: 'Name', id: utilService.makeId() },
          { dataType: 'text', name: 'wap-input', placeholder: 'Email', id: utilService.makeId() },
          { dataType: 'text', name: 'wap-input', placeholder: 'Subject', id: utilService.makeId() },
          { dataType: 'text', name: 'wap-input', placeholder: 'Type your message here...', id: utilService.makeId() }
        ],
        btn: { label: 'Submit', link: '#wc03' },
      },

    }
  ]
}

