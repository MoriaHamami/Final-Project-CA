import { utilService } from '../../services/util.service.js'


export const wapAbout5 = {
  id: utilService.makeId(),
  type: 'wap-about',
  name: 'wap-about-5',
  themePalette: 'primary',
  imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674688190/Webix/wap-about-5_ypiloe.jpg',
  info: {
    title: { txt: 'Kiss & Makeup', id: utilService.makeId(), style: { fontFamily: 'playfair-regular', color: 'white', textAlign: 'center' }, type: 'txt', key: 'title' },
    subtitle: { txt: 'I`m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you', id: utilService.makeId(), style: { color: 'black', lineHeight: '1.6em' }, type: 'txt', key: 'subtitle' },
    photo: {
      url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674658782/hero_demo5_b5vhk8.png',
      type: 'img',
      key: 'photo',
      id: utilService.makeId()
    },

  },
  // theme: 'theme-section-happy',
  style: {
    fontFamily: 'roboto-light',
  }
}