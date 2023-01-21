import { utilService } from '../../services/util.service.js'


export const wapVideo1 = {
  id: utilService.makeId(),
  type: 'wap-video',
  name: 'wap-video-1',
  info: {
    subtitle: '',
    title: 'Discover Us',
    embedId: 'G-jPoROGHGE',
    subtitle: 'Watch the Master in Action!',
    iframeStyle: {
      width: '50%',
      minWidth: '300px',
      // height: '100%',
      // padding: 0,
      // margin: 0,
      border: 'none',
      aspectRatio: 16 / 9
    }
  },
  // cmps: [],
  theme: 'theme-section-happy',
  style: {
    fontFamily: 'fe-serif',
  },
}

