import { utilService } from '../../services/util.service.js'


export const wapAbout2 = {
  id: utilService.makeId(),
  type: 'wap-about',
  name: 'wap-about-2',
  info: {
    title: { txt: 'Our Story', id: utilService.makeId(), style: { fontWeight: '600', fontSize: '1.7em' }, type: 'txt' },
    subtitle: { txt: '', id: utilService.makeId(), style: {}, type: 'txt' },
    btn: { label: "Read More", link: "#wc20b", id: utilService.makeId(), style: { fontSize: '0.8em', fontWeight: '300', borderRadius: '0.25em' }, type: 'btn' },
    photo: {
        title: { txt: '', id: utilService.makeId(), style: {}, type: 'txt' },
        subtitle: { txt: 'We are a couple for 3 years who have always been passionate about exploring new places and cultures. We started my vlog as a way to document my travels and share our experiences with others.', style: { fontSize: '0.9em' }, id: utilService.makeId(), type: 'txt' },
        url: '',
        type: 'img',
        id: utilService.makeId()
      },

  },
  theme: 'theme-section-happy',
  style: {
    fontFamily: 'handlee',
  }
}
// export const wapPreview2 = {
//   id: utilService.makeId(),
//   type: 'wap-preview',
//   name: 'wap-preview-2',
//   info: {
//     subtitle: { txt: '', id: utilService.makeId(), style: {} },
//     title: { txt: 'Our Story', id: utilService.makeId(), style: { fontWeight: '600', fontSize: '1.7em' } },
//     url: '',
//     txt: { txt: 'We are a couple for 3 years who has always been passionate about exploring new places and cultures. We started my vlog as a way to document my travels and share our experiences with others.', style: { fontSize: '0.9em' }, id: utilService.makeId() },
//     btn: { label: "Read More", link: "#wc20b", id: utilService.makeId(), style: { fontSize: '0.8em', fontWeight: '300', borderRadius: '0.25em' } }
//   },
//   theme: 'theme-section-happy',
//   style: {
//     fontFamily: 'handlee',
//   }
// }

