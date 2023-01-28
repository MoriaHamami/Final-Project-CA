import { utilService } from '../../services/util.service.js'


export const wapVideo5 = {
  id: utilService.makeId(),
  type: 'wap-video',
  name: 'wap-video-5',
  themePalette: 'third',
  imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674557656/Webix/wap-video-2_kxnngq.jpg',
  info: {
    title: { txt: 'Get to know us', style: { fontFamily: 'roboto-light', fontSize: '2em', color:'white' }, id: utilService.makeId(), type: 'txt', key: 'title' },
    // embedId: '0U7IWgCREik',
    video: {
      url: 'https://www.youtube.com/embed/JPUbSvsxjsY',
      id: utilService.makeId(),
      style: {
        width: '70%',
        minWidth: '270px',
        border: 'none',
        aspectRatio: 16 / 8,
        key: 'btns'
      },
      type: 'video',
      key: 'video'
    }
  },
  // cmps: [],
  // theme: 'theme-section-happy',
  style: {
    backgroundColor: 'rgb(216 182 182)'
  },
}
