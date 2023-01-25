import { utilService } from '../../services/util.service.js'

export const wapFooter3 = {
  name: 'wap-footer-3',
  type: 'wap-footer',
  id: utilService.makeId(),
  imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674557656/Webix/wap-footer-2_oxvc2b.jpg',
  info: {
    txt: { txt: "© 2035 by Mother & More. Powered and secured by Webix", style: { fontSize: '0.9em', color:'rgb(163,95,80)' }, id: utilService.makeId(), type: 'txt' },
  },
  thumbnail: null,
  style: {
    fontFamily: 'handlee',
  },

}