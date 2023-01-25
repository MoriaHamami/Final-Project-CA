import { utilService } from '../../services/util.service.js'

export const wapFooter6 = {
  name: 'wap-footer-4',
  type: 'wap-footer',
  id: utilService.makeId(),
  info: {

    txt: { txt: ' Email Us: info@mysite.com   |   Tel: 123-456-7890   |   APEX 🔶\t SPORTS \t PSYCHOLOGY', style: {fontSize: '0.8em'}, id: utilService.makeId(), type: 'txt' },
    btns: [
        { label: 'linkedin', link: '#wc16', id: utilService.makeId(), style: {color:'white', fontSize: '1.1em'}, type: 'btn' },
        { label: 'twitter', link: '#wc15', id: utilService.makeId(), style: {color:'white', fontSize: '1.1em'}, type: 'btn' },
        { label: 'facebook', link: '#wc14', id: utilService.makeId(), style: {color:'white', fontSize: '1.1em'}, type: 'btn' },
    ]
  },
  thumbnail: null,
  style: {
    fontFamily: 'roboto-light',
  },

}
