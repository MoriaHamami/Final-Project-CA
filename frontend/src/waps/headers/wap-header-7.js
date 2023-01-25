
import { utilService } from '../../services/util.service.js'

export const wapHeader7 = {
  id: utilService.makeId(),
  type: 'wap-header',
  name: 'wap-header-7',
  imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674557656/Webix/wap-header-2_vpirwm.jpg',
  info: {
    logo: { txt: 'La`Cafe', style: { fontSize: '2em', fontWeight: '700',fontFamily: 'playfair-regular', color:'#60695d' }, id: utilService.makeId(), type: 'txt', key: 'logo' },
    btns: [
      { label: 'Home', link: '#wc23', id: utilService.makeId(), style: { fontSize: '0.9em' }, type: 'btn', key: 'btns' },
      { label: 'Contact us', link: '#wc25', id: utilService.makeId(), style: { fontSize: '0.9em' }, type: 'btn', key: 'btns' }
    ],
    login: { label: 'Log In', link: '#', id: utilService.makeId(), style: {fontSize:'0.9em', color:'#60695d'}, type: 'btn', key: 'login' }
  },
  theme: 'theme-header-happy',
  style: {
    fontFamily: 'roboto-light',
  }
}

