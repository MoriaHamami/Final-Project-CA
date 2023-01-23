
import { utilService } from '../../services/util.service.js'

export const wapHeader2 = {
  id: utilService.makeId(),
  type: 'wap-header',
  name: 'wap-header-2',
  imgUrl: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674323590/header2_cqdk4t.png',
  info: {
    logo: { txt: 'Urban Nomad Adventures', style: {fontSize:'1.3em', fontWeight: '700'}, id: utilService.makeId(), type: 'txt' },
    btns: [
      { label: 'Home', link: '#wc23', id: utilService.makeId(), style: {fontSize:'0.9em'}, type: 'btn' },
      { label: 'About', link: '#wc24', id: utilService.makeId(), style: {fontSize:'0.9em'}, type: 'btn' },
      { label: 'Book Online', link: '#wc25', id: utilService.makeId(), style: {fontSize:'0.9em'}, type: 'btn' }
    ]
  },
  theme: 'theme-header-happy',
  style: {
    fontFamily: 'handlee',
  }
}

