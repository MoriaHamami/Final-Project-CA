import {utilService} from '../../services/util.service.js'

export const wapFooter2 = {
  name: 'wap-footer-2',
  type: 'wap-footer',
  id: utilService.makeId(),
  info: {
    txt: { txt: "© 2023 Adventure Tour Company | Created using Webix", style: {}, id: utilService.makeId() },
    btns: [
      { label: "facebook", link: "#wc24", id: utilService.makeId() },
      { label: "instagram", link: "#wc26", id: utilService.makeId() }
    ]
  },
  thumbnail: null,
  style: {
    fontFamily: 'handlee',
  },
  
}
