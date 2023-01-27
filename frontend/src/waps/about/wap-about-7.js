import { utilService } from '../../services/util.service.js'


export const wapAbout7 = {
  id: utilService.makeId(),
  type: 'wap-about',
  name: 'wap-about-7',
  themePalette: 'primary',
  info: {
    title: { txt: 'Weekend Brunch     I    Saturday 9am - 2pm', id: utilService.makeId(), style: { fontSize: '1.1em', color:'white', fontFamily: 'roboto-light' }, type: 'txt', key: 'title' },
  },
  // theme: 'theme-section-happy',
  style: {
    fontFamily: 'roboto-light',
  }
}