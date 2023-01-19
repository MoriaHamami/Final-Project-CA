import {utilService} from '../../services/util.service.js'

export const wapFooter1 = {
  name: 'wap-footer-1',
  type: 'wap-footer',
  id: 'wc17',
  info: {
    txt: "© 2023 Mario shop | Created using Webix",
    btns: [
      { label: "facebook", link: "#wc14", id: utilService.makeId() },
      { label: "instagram", link: "#wc16", id: utilService.makeId() }
    ]
  },
  thumbnail: null,
  style: {},
  
}
