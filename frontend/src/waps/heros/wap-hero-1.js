import { utilService } from '../../services/util.service.js'

export const wapHero1 = {
  id: utilService.makeId(),
  type: 'wap-hero',
  name: 'wap-hero-1',
  themePalette: 'third',
  imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674926444/Webix/wap-hero-1-_2_-transformed_an6lfh.jpg',
  info: {
    title: { txt: 'Mario', id: utilService.makeId(), style: { fontWeight: '600', fontSize: '2em' }, type: 'txt', key: 'title' },
    subtitle: { txt: 'PIZZA PLACE', id: utilService.makeId(), style: { fontSize: '3.5em' }, type: 'txt', key: 'subtitle' },
    txt: { txt: 'TAKEOUT & DELIVERY', id: utilService.makeId(), style: { fontWeight: '500', fontSize: '1.3em' }, type: 'txt', key: 'txt' },
    btn: { label: 'Order Now', link: '#wc10b', id: utilService.makeId(), style: { borderRadius: '1em', backgroundColor: 'rgba(255, 255, 255, 0.276)', fontWeight: '600' }, type: 'btn', key: 'btn' },
  },
  // theme: 'theme-header-happy',
  style: {
    backgroundImage: 'url("https://res.cloudinary.com/dvnxslwcz/image/upload/v1674926444/Webix/wap-hero-1-_2_-transformed_an6lfh.jpg")',
    fontFamily: 'mont-heavy ',
    // backgroundColor: 'red',
  }
}
