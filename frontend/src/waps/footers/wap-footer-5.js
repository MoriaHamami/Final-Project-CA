import { utilService } from '../../services/util.service.js'

export const wapFooter5 = {
  name: 'wap-footer-5',
  type: 'wap-footer',
  themePalette: 'third',
  id: utilService.makeId(),
  imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674688190/Webix/wap-footer-5_arlr6b.jpg',
  info: {
    txt: { txt: ' © 2023 Powered and secured by Webix', style: { fontSize: '0.8em', color: 'white' }, id: utilService.makeId(), type: 'txt', key: 'txt' },
    btns: [
      { label: 'instagram', link: '#wc16', id: utilService.makeId(), style: { color: 'white', fontSize: '1.1em' }, type: 'btn', key: 'btns' },
      { label: 'twitter', link: '#wc15', id: utilService.makeId(), style: { color: 'white', fontSize: '1.1em' }, type: 'btn', key: 'btns' },
      { label: 'facebook', link: '#wc14', id: utilService.makeId(), style: { color: 'white', fontSize: '1.1em' }, type: 'btn', key: 'btns' },
    ]
  },
  thumbnail: null,
  style: {
    fontFamily: 'roboto-light',
  },

}
