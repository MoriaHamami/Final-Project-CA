
import { utilService } from '../../services/util.service.js'

export const wapHeader6 = {
  id: utilService.makeId(),
  type: 'wap-header',
  name: 'wap-header-6',
  imgUrl: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674323590/header2_cqdk4t.png',
  info: {
    logo: { txt: 'APEX 🔶\t SPORTS \t PSYCHOLOGY', style: {fontSize:'1.05em', color:'white', lineHeight: '1em'}, id: utilService.makeId(), type: 'txt' },
    btns: [
      { label: 'ABOUT', link: '#wc24', id: utilService.makeId(), style: {fontSize:'0.9em', color:'white'}, type: 'btn' },
      { label: 'SERVICE', link: '#wc23', id: utilService.makeId(), style: {fontSize:'0.9em', color:'white'}, type: 'btn' },
      { label: 'PLANS', link: '#wc25', id: utilService.makeId(), style: {fontSize:'0.9em', color:'white'}, type: 'btn' },
      { label: 'CONTACT', link: '#wc26', id: utilService.makeId(), style: {fontSize:'0.9em', color:'white'}, type: 'btn' }
    ],
  },
  theme: 'theme-header-happy',
  style: {
    fontFamily: 'mont-heavy'
  }
}
