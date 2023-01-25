import { utilService } from '../../services/util.service.js'

export const wapHero7 = {
  id: utilService.makeId(),
  type: 'wap-hero',
  name: 'wap-hero-7',
  info: {
    title: { txt: 'Cafe & Restaurant Est. 1999', style: { fontSize: '1em', color:'white', fontFamily: 'roboto-light', lineHeight: '1em'}, id: utilService.makeId(), type: 'txt', key: 'title' },
    subtitle: { txt: 'Your Go-to Spot for Delicious Eats & Coffee', style: { fontSize: '4.1em', color:'white', fontFamily: 'playfair-regular', fontWeight:'900'}, id: utilService.makeId(), type: 'txt', key: 'subtitle' },
    btn: { label: 'Order Now', link: '#wc20b', id: utilService.makeId(), style: { fontSize: '1em',color:'white',backgroundColor:'inherit', fontFamily: 'roboto-regular'}, type: 'btn', key: 'btn' },
  },
  theme: 'theme-header-happy',
  style: {
    backgroundImage: 'url("https://res.cloudinary.com/dimirmc9j/image/upload/v1674672145/hero7wap_plyttb.png")',
    backgroundAttachment: 'fixed',
    fontFamily: 'playfair-regular'
    
  }
}