import { utilService } from '../../services/util.service.js'

export const wapHero2 = {
  id: utilService.makeId(),
  type: 'wap-hero',
  name: 'wap-hero-2',
  info: {
    title: { txt: 'Urban Nomad Adventures', style: {}, id: utilService.makeId() },
    subtitle: { txt: 'Experience Oregon like a Local', style: {}, id: utilService.makeId() },
    btn: { label: 'Let\'s Go', link: '#wc20b', id: utilService.makeId() },
  },
  theme: 'theme-header-happy',
  style: {
    backgroundImage: 'url("https://res.cloudinary.com/dimirmc9j/image/upload/v1674060120/card1_cbglsw.jpg")',
    // font: 'Fontush',
  }
}
