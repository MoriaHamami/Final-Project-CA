import { utilService } from '../../services/util.service.js'


export const wapPreview2 = {
  id: utilService.makeId(),
  type: 'wap-preview',
  name: 'wap-preview-2',
  info: {
    subtitle: '',
    title: 'Our Story',
    imgUrl: '',
    txt: 'We are a couple for 3 years who has always been passionate about exploring new places and cultures. We started my vlog as a way to document my travels and share our experiences with others.',
    btn: { label: "Read More", link: "#wc20b", id: utilService.makeId() }
  },
  theme: 'theme-section-happy',
  style: {}
}

