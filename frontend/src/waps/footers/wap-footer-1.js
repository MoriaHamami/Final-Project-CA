import { utilService } from '../../services/util.service.js'

export const wapFooter1 = {
  name: 'wap-footer-1',
  type: 'wap-footer',
  themePalette: 'third',
  
  id: utilService.makeId(),
  imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674764822/Webix/wap-footer-1_eqnec9.jpg',
  info: {
    txt: { txt: '© 2023 Mario shop | Created using Webix', style: { fontSize: '1.2em' }, id: utilService.makeId(), type: 'txt', key: 'txt' },
    btns: [
      { label: 'facebook', link: '#wc14', id: utilService.makeId(), style: { borderRadius: '50%' }, type: 'btn', key: 'btns' },
      { label: 'instagram', link: '#wc16', id: utilService.makeId(), style: { borderRadius: '50%' }, type: 'btn', key: 'btns' }
    ]
  },
  thumbnail: null,
  style: {
    fontFamily: 'fe-serif',
  },

}
