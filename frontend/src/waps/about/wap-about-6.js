import { utilService } from '../../services/util.service.js'


export const wapAbout6 = {
  id: utilService.makeId(),
  type: 'wap-about',
  name: 'wap-about-6',
  info: {
    title: { txt: 'ABOUT APEX', id: utilService.makeId(), style: { fontSize: '2.1em', color:'white', fontFamily: 'mont-heavy', lineHeight: '1em', letterSpacing: '0.1em' }, type: 'txt', key: 'title' },
    subtitle: { txt: 'I`m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you', id: utilService.makeId(), style: { color:'white'}, type: 'txt', key: 'subtitle' },
    photo: {
        url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674636253/Athlete_yx3pdt.jpg',
        type: 'img',
        id: utilService.makeId(),
        style: {},
        key: 'photo'
      },

  },
  theme: 'theme-section-happy',
  style: {
    fontFamily: 'roboto-light',
  }
}