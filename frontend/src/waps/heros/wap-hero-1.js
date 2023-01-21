import { utilService } from '../../services/util.service.js'

export const wapHero1 = {
  id: utilService.makeId(),
  type: 'wap-hero',
  name: 'wap-hero-1',
  info: {
    title: {txt: 'Mario', id: utilService.makeId(), style: {}},
    subtitle: {txt: 'PIZZA PLACE', id: utilService.makeId(), style: {}},
    txt: {txt: 'TAKEOUT & DELIVERY', id: utilService.makeId(), style: {}},

    btn: { label: 'Order NOW', link: '#wc10b', id: utilService.makeId(), style: {} },
  },
  theme: 'theme-header-happy',
  style: {
    backgroundImage: 'url("https://res.cloudinary.com/dimirmc9j/image/upload/v1674028332/wap-hero-background-1_ydwwdf.jpg")',
      fontFamily: 'fe-serif',
      // backgroundColor: 'red',
  }
}
