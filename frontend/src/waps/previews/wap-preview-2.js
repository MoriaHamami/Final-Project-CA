import { utilService } from '../../services/util.service.js'


export const wapPreview2 = {
  id: utilService.makeId(),
  type: 'wap-preview',
  name: 'wap-preview-2',
  info: {
    subtitle: { txt: '', id: utilService.makeId(), style: {} },
    title: { txt: 'Our Story', id: utilService.makeId(), style: { fontWeight: '600', fontSize: '1.7em' } },
    imgUrl: '',
    txt: { txt: 'We are a couple for 3 years who has always been passionate about exploring new places and cultures. We started my vlog as a way to document my travels and share our experiences with others.', style: { fontSize: '0.9rem' }, id: utilService.makeId() },
    btn: { label: "Read More", link: "#wc20b", id: utilService.makeId(), style: { fontSize: '0.8rem', fontWeight: '300' } }
  },
  theme: 'theme-section-happy',
  style: {
    fontFamily: 'handlee',
  }
}

