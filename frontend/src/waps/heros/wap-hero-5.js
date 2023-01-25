import { utilService } from '../../services/util.service.js'

export const wapHero5 = {
  id: utilService.makeId(),
  type: 'wap-hero',
  name: 'wap-hero-5',
  info: {
    title: { txt: 'Urban Adventures - Graffiti Art', style: { fontFamily: 'open-sans', fontSize: '1.5em',  color: 'black', textAlign:'center' }, id: utilService.makeId(), type: 'txt' },
    // subtitle: { txt: 'We are strategic consulting & media agency for apps. We are committed to meeting your company’s needs.', style: { fontSize: '1.1em',  color: 'white', textAlign:'center' }, id: utilService.makeId(), type: 'txt' },
    btn: { label: 'V', link: '#wc20b', id: utilService.makeId(), style: { fontSize: '1.2em', color:'black', backgroundColor: 'inherit' }, type: 'btn' },
  },
  theme: 'theme-header-happy',
  style: {
    backgroundImage: 'url("https://res.cloudinary.com/dimirmc9j/image/upload/v1674631446/hero5_gfyf4y.webp")',
    fontFamily: 'roboto-light',
  }
}
