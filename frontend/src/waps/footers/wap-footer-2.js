import { utilService } from '../../services/util.service.js'

export const wapFooter2 = {
  name: 'wap-footer-2',
  type: 'wap-footer',
  themePalette: 'third',
  
  id: utilService.makeId(),
  imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674557656/Webix/wap-footer-2_oxvc2b.jpg',
  info: {
    txt: { txt: "© 2023 Adventure Tour Company | Created using Webix", style: { fontSize: '1.2em' }, id: utilService.makeId(), type: 'txt', key: 'txt' },
    btns: [
      { label: "facebook", link: "#wc24", id: utilService.makeId(), style: { borderRadius: '50%' }, type: 'btn', key: 'btns' },
      { label: "instagram", link: "#wc26", id: utilService.makeId(), style: { borderRadius: '50%' }, type: 'btn', key: 'btns' }
    ]
  },
  thumbnail: null,
  style: {
    fontFamily: 'handlee',
  },

}
