
import { utilService } from '../../services/util.service.js'

export const wapHeader3 = {
  id: utilService.makeId(),
  type: 'wap-header',
  name: 'wap-header-3',
  themePalette: 'third',

  imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674680444/Webix/wap-header-3_t5svyp.jpg',
  info: {
    logo: { txt: '&', style: { fontSize: '1.3em', color: '#704F4F' }, id: utilService.makeId(), type: 'txt', key: 'logo' },
    btns: [
      { label: 'About', link: '#wc24', id: utilService.makeId(), style: { fontSize: '0.9em', color: '#704F4F' }, type: 'btn', key: 'btns' },
      { label: 'Service', link: '#wc23', id: utilService.makeId(), style: { fontSize: '0.9em', color: '#704F4F' }, type: 'btn', key: 'btns' },
      { label: 'Testimonials', link: '#wc25', id: utilService.makeId(), style: { fontSize: '0.9em', color: '#704F4F' }, type: 'btn', key: 'btns' },
      { label: 'Contact', link: '#wc26', id: utilService.makeId(), style: { fontSize: '0.9em', color: '#704F4F' }, type: 'btn', key: 'btns' }
    ],
    login: { label: 'Log In', link: '#', id: utilService.makeId(), style: { fontSize: '0.9em', color: '#704F4F' }, type: 'btn', key: 'login' }
  },
  style: {
    fontFamily: 'playfair-regular',
  }
}
