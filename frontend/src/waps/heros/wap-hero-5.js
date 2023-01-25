import { utilService } from '../../services/util.service.js'

export const wapHero5 = {
  id: utilService.makeId(),
  type: 'wap-hero',
  name: 'wap-hero-5',
  imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674688524/Webix/wap-hero-5_kwsl0v.jpg',
  info: {
    title: { txt: `I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.`, style: { fontSize: '1.3em', color: 'black', fontFamily: 'roboto-light' }, id: utilService.makeId(), type: 'txt', key: 'title' },
    subtitle: { txt: '| Rosie Gomez |', link: '#wc20b', id: utilService.makeId(), style: { fontSize: '1.3em', color: 'black', fontFamily: 'playfair-regular' }, type: 'btn', key: 'btn' },
  },
  theme: 'theme-header-happy',
  style: {
    backgroundImage: 'url("https://res.cloudinary.com/dimirmc9j/image/upload/v1674662607/%D7%A9%D7%9B%D7%A9%D7%93%D7%92%D7%A9%D7%92_m1cite.png")',
    backgroundAttachment: 'fixed',
  }
}
