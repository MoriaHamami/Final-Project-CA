
import { utilService } from '../../services/util.service.js'

export const wapHeader2 = {
  id: utilService.makeId(),
  type: 'wap-header',
  name: 'wap-header-2',
  info: {
    logo: { txt: 'Urban Nomad Adventures', style: {}, id: utilService.makeId() },
    btns: [
      { label: 'Home', link: '#wc23', id: utilService.makeId(), style: {} },
      { label: 'About', link: '#wc24', id: utilService.makeId(), style: {} },
      { label: 'Book Online', link: '#wc25', id: utilService.makeId(), style: {} }
    ]
  },
  theme: 'theme-header-happy',
  style: {
    fontFamily: 'handlee',
  }
}

