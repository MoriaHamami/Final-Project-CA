import { utilService } from '../../services/util.service.js'


export const wapAbout3B = {
  id: utilService.makeId(),
  type: 'wap-about',
  name: 'wap-about-3b',
  info: {
    title: { txt: 'A mother would never by choice sleep in a wet bed but she would gladly do so in order to spare the dry bed for her child', id: utilService.makeId(), style: { fontSize: '1.7em', color:'rgb(163,95,80)', textAlign:'center' }, type: 'txt', key: 'title' },
    subtitle: { txt: 'Mahatma Gandhi', id: utilService.makeId(), style: { fontSize: '1.3em', color:'rgb(163,95,80)', textAlign:'center', fontFamily: 'playfair-regular', fontStyle: 'italic' }, type: 'txt', key: 'subtitle' },
  },
  theme: 'theme-section-happy',
  style: {
    fontFamily: 'roboto-light',
  }
}