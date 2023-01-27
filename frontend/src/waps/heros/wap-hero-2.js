import { utilService } from '../../services/util.service.js'

export const wapHero2 = {
  id: utilService.makeId(),
  type: 'wap-hero',
  name: 'wap-hero-2',
  themePalette: 'third',
  imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674557657/Webix/wap-hero-2_rz0crj.jpg',

  info: {
    title: { txt: 'Urban Nomad Adventures', style: { fontWeight: '600', fontSize: '3.5em' }, id: utilService.makeId(), type: 'txt', key: 'title' },
    subtitle: { txt: 'Experience Oregon like a Local', style: { fontSize: '1.2em' }, id: utilService.makeId(), type: 'txt', key: 'subtitle' },
    btn: { label: 'Let\'s Go', link: '#wc20b', id: utilService.makeId(), style: { fontWeight: '500', borderRadius: '0.25em' }, type: 'btn', key: 'btn' },
  },
  // theme: 'theme-header-happy',
  style: {
    backgroundImage: 'url("https://res.cloudinary.com/dimirmc9j/image/upload/v1674060120/card1_cbglsw.jpg")',
    fontFamily: 'handlee',
  }
}
