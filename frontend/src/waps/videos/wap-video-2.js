import { utilService } from '../../services/util.service.js'


export const wapVideo2 = {
  id: utilService.makeId(),
  type: 'wap-video',
  name: 'wap-video-2',
  info: {
    title: { txt: 'Get to know us', style: { fontSize: '2em' }, id: utilService.makeId() },
    embedId: '0U7IWgCREik',
    iframeStyle: {
      width: '70%',
      minWidth: '300px',
      // height: '100%',
      // padding: 0,
      // margin: 0,
      border: 'none',
      aspectRatio: 16 / 8
    }
  },
  // cmps: [],
  theme: 'theme-section-happy',
  style: {
    fontFamily: 'handlee',
  },
}
