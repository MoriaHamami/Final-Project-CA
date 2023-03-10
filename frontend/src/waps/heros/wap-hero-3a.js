import { utilService } from '../../services/util.service.js'

export const wapHero3A = {
  id: utilService.makeId(),
  type: 'wap-hero',
  name: 'wap-hero-3a',
  themePalette: 'primary',
  imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674680445/Webix/wap-hero-3_uprvjz.jpg',

  info: {
    title: { txt: 'Mother & More', style: { fontWeight: '600', fontSize: '3.5em', color: 'rgb(232,153,137)', fontFamily: 'playfair-regular', fontStyle: 'italic' }, id: utilService.makeId(), type: 'txt', key: 'title' },
    subtitle: { txt: 'Nicole Knight, Lactation Consultant', style: { fontSize: '1.2em', color: 'rgb(232,153,137)', fontFamily: 'playfair-regular', fontStyle: 'italic' }, id: utilService.makeId(), type: 'txt', key: 'subtitle' },
    btn: { label: 'My Services', link: '#wc20b', id: utilService.makeId(), style: { fontSize: '1em', color: '#704F4F', fontFamily: 'playfair-regular', fontStyle: 'italic' }, type: 'btn', key: 'btn' },
  },
  // theme: 'theme-header-happy',
  style: {
    backgroundImage: 'url("https://res.cloudinary.com/dimirmc9j/image/upload/v1674560261/demo3heronew_qxveuo.webp")',
    backgroundAttachment: 'fixed',
    fontFamily: 'playfair-regular'

  }
}
