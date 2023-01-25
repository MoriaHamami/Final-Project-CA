import { utilService } from '../../services/util.service.js'


export const wapAbout3A = {
  id: utilService.makeId(),
  type: 'wap-about',
  name: 'wap-about-3a',
  info: {
    title: { txt: 'About Me', id: utilService.makeId(), style: { fontSize: '1.7em', color:'rgb(163,95,80)', textAlign:'center', fontFamily: 'playfair-regular', fontStyle: 'italic' }, type: 'txt', key: 'title' },
    subtitle: { txt: 'I`m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you', id: utilService.makeId(), style: { color:'rgb(163,95,80)'}, type: 'txt', key: 'subtitle' },
    photo: {
        url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674558709/demo3preview_y1zl41.webp',
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