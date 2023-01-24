import { utilService } from '../../services/util.service.js'


export const wapVideo2 = {
  id: utilService.makeId(),
  type: 'wap-video',
  name: 'wap-video-2',
  info: {
    title: { txt: 'Get to know us', style: { fontSize: '2em' }, id: utilService.makeId(), type: 'txt' },
    // embedId: '0U7IWgCREik',
    video: {
      url: 'https://www.youtube.com/embed/0U7IWgCREik',
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
