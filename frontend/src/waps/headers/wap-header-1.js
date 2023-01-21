
import { utilService } from '../../services/util.service.js'

export const wapHeader1 = {
  id: utilService.makeId(),
  type: 'wap-header',
  name: 'wap-header-1',
  // imgUrl: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674323590/header2_cqdk4t.png',
  imgUrl: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674323679/header1_k18zgy.png',
  info: {
    logo: { txt: 'MarioPizza', style: {}, id: utilService.makeId() },
    btns: [
      { label: 'Our Story', link: '#wc14', id: utilService.makeId(), style: {} },
      { label: 'Reservation', link: '#wc10b', id: utilService.makeId(), style: {} }
    ]
  },
  theme: 'theme-header-happy',
  style: {
    fontFamily: 'fe-serif',
    // backgroundColor: '',

  }
}

