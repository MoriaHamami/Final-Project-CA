import { utilService } from '../../services/util.service.js'


export const wapAbout4 = {
  id: utilService.makeId(),
  type: 'wap-about',
  name: 'wap-about-4',
  info: {
    title: { txt: 'ABOUT', id: utilService.makeId(), style: { fontFamily: 'open-sans',fontSize: '2.8em', color:'#34d1b6', textAlign:'center', letterSpacing: '0.3em' }, type: 'txt' },
    subtitle: { txt: 'I`m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you', id: utilService.makeId(), style: { color:'black', lineHeight:'1.6em'}, type: 'txt' },
    photo: {
        url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674589146/demo4about_wb3ybs.jpg',
        type: 'img',
        id: utilService.makeId()
      },

  },
  theme: 'theme-section-happy',
  style: {
    fontFamily: 'roboto-light',
  }
}