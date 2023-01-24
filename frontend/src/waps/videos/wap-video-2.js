import { utilService } from '../../services/util.service.js'


export const wapVideo2 = {
  id: utilService.makeId(),
  type: 'wap-video',
  name: 'wap-video-2',
  imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674557656/Webix/wap-video-2_kxnngq.jpg',
  info: {
    title: { txt: 'Get to know us', style: { fontSize: '2em' }, id: utilService.makeId(), type: 'txt' },
    // embedId: '0U7IWgCREik',
    iframe: {
      url: '0U7IWgCREik',
      id: utilService.makeId(),
      style: {
        width: '70%',
        minWidth: '300px',
        border: 'none',
        aspectRatio: 16 / 8
      },
      type: 'video'
    }
  },
  // cmps: [],
  theme: 'theme-section-happy',
  style: {
    fontFamily: 'handlee',
  },
}
