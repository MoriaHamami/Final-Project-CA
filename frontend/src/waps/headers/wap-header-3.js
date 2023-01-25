
import { utilService } from '../../services/util.service.js'

export const wapHeader3 = {
  id: utilService.makeId(),
  type: 'wap-header',
  name: 'wap-header-3',
  imgUrl: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674323590/header2_cqdk4t.png',
  info: {
    logo: { txt: '&', style: {fontSize:'1.3em', color:'#704F4F'}, id: utilService.makeId(), type: 'txt' },
    btns: [
      { label: 'About', link: '#wc24', id: utilService.makeId(), style: {fontSize:'0.9em', color:'#704F4F'}, type: 'btn' },
      { label: 'Service', link: '#wc23', id: utilService.makeId(), style: {fontSize:'0.9em', color:'#704F4F'}, type: 'btn' },
      { label: 'Testimonials', link: '#wc25', id: utilService.makeId(), style: {fontSize:'0.9em', color:'#704F4F'}, type: 'btn' },
      { label: 'Contact', link: '#wc26', id: utilService.makeId(), style: {fontSize:'0.9em', color:'#704F4F'}, type: 'btn' }
    ],
    login: { label: 'Log In', link: '#', id: utilService.makeId(), style: {fontSize:'0.9em', color:'#704F4F'}, type: 'btn' }
  },
  theme: 'theme-header-happy',
  style: {
    fontFamily: 'playfair-regular',
  }
}
