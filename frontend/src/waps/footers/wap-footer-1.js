import { utilService } from '../../services/util.service.js'

export const wapFooter1 = {
  name: 'wap-footer-1',
  type: 'wap-footer',
  id: utilService.makeId(),
  info: {
    txt: { txt: '© 2023 Mario shop | Created using Webix', style: {fontSize: '1.2em'}, id: utilService.makeId(), type: 'txt' },
    btns: [
      { label: 'facebook', link: '#wc14', id: utilService.makeId(), style: {borderRadius: '50%'}, type: 'btn' },
      { label: 'instagram', link: '#wc16', id: utilService.makeId(), style: {borderRadius: '50%'}, type: 'btn' }
    ]
  },
  thumbnail: null,
  style: {
    fontFamily: 'fe-serif',
  },

}
