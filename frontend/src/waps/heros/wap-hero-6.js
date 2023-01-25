import { utilService } from '../../services/util.service.js'

export const wapHero6 = {
  id: utilService.makeId(),
  type: 'wap-hero',
  name: 'wap-hero-6',
  imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674683979/Webix/wap-hero-6_l6wu3d.jpg',
  info: {
    title: { txt: 'MAXIMIZE YOUR FULL POTENTIAL.', style: { fontSize: '5.9em', color: 'white', fontFamily: 'mont-heavy', lineHeight: '1em', letterSpacing: '0.1em' }, id: utilService.makeId(), type: 'txt', key: 'title' },
    subtitle: { txt: 'Mental and performance training for athletes and coaches', style: { fontSize: '2.5em', color: '#fd6c2e', fontFamily: 'roboto-light', fontStyle: 'italic' }, id: utilService.makeId(), type: 'txt', key: 'subtitle' },
    btn: { label: 'BOOK NOW', link: '#wc20b', id: utilService.makeId(), style: { fontSize: '1em', color: 'black', backgroundColor: 'white', fontFamily: 'mont-heavy' }, type: 'btn', key: 'btn' },
  },
  theme: 'theme-header-happy',
  style: {
    backgroundImage: 'url("https://res.cloudinary.com/dimirmc9j/image/upload/v1674634874/%D7%A2%D7%99%D7%A6%D7%95%D7%91_%D7%9C%D7%9C%D7%90_%D7%A9%D7%9D_2_sfshid.png")',
    backgroundAttachment: 'fixed',
    fontFamily: 'playfair-regular'

  }
}