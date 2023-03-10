import { utilService } from '../../services/util.service.js'

export const wapHero3B = {
  id: utilService.makeId(),
  type: 'wap-hero',
  name: 'wap-hero-3b',
  themePalette: 'secondary',
  imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674862009/Webix/wap-hero-3b_baw4ck.jpg',
  info: {
    title: { txt: 'Mother & Blog', style: { fontWeight: '600', fontSize: '3.5em', color: 'rgb(232,153,137)', fontFamily: 'playfair-regular', fontStyle: 'italic' }, id: utilService.makeId(), type: 'txt', key: 'title' },
    btn: { label: 'Read Blog', link: '#wc20b', id: utilService.makeId(), style: { fontSize: '1em', color: '#704F4F', fontFamily: 'playfair-regular', fontStyle: 'italic' }, type: 'btn', key: 'btn' },
  },
  // theme: 'theme-header-happy',
  style: {
    backgroundImage: 'url("https://res.cloudinary.com/dimirmc9j/image/upload/v1674560526/demo3hero2_ivqaom.jpg")',
    backgroundAttachment: 'fixed',
    fontFamily: 'handlee',
  }
}
