
import { utilService } from '../../services/util.service.js'

export const wapHeader1 = {
  id: utilService.makeId(),
  type: 'wap-header',
  name: 'wap-header-1',
  info: {
    logo: 'MarioPizza',
    btns: [
      { label: 'Our Story', link: '#wc14', id: utilService.makeId() },
      { label: 'Reservation', link: '#wc10b', id: utilService.makeId() }
    ]
  },
  theme: 'theme-header-happy',
  style: {}
}

