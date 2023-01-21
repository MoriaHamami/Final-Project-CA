import { utilService } from '../../services/util.service.js'

export const wapFooter1 = {
  name: 'wap-footer-1',
  type: 'wap-footer',
  id: utilService.makeId(),
  info: {
    txt: { txt: '© 2023 Mario shop | Created using Webix', style: {}, id: utilService.makeId() },
    btns: [
      { label: 'facebook', link: '#wc14', id: utilService.makeId(), style: {} },
      { label: 'instagram', link: '#wc16', id: utilService.makeId(), style: {} }
    ]
  },
  thumbnail: null,
  style: {
    fontFamily: 'fe-serif',
  },

}
