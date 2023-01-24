import { utilService } from '../../services/util.service.js'

export const wapHero3A = {
  id: utilService.makeId(),
  type: 'wap-hero',
  name: 'wap-hero-3a',
  info: {
    title: { txt: 'Mother & More', style: { fontWeight: '600', fontSize: '3.5em', color:'rgb(232,153,137)' }, id: utilService.makeId(), type: 'txt' },
    subtitle: { txt: 'Nicole Knight, Lactation Consultant', style: { fontSize: '1.2em', color:'rgb(232,153,137)' }, id: utilService.makeId(), type: 'txt' },
    btn: { label: 'My Services', link: '#wc20b', id: utilService.makeId(), style: { fontSize: '1em',color:'#704F4F' }, type: 'btn' },
  },
  theme: 'theme-header-happy',
  style: {
    backgroundImage: 'url("https://res.cloudinary.com/dimirmc9j/image/upload/v1674560261/demo3heronew_qxveuo.webp")',
    backgroundAttachment: 'fixed',
    fontFamily: 'handlee',
  }
}
