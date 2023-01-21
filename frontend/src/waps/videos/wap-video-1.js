import { utilService } from '../../services/util.service.js'


export const wapVideo1 = {
  id: utilService.makeId(),
  type: 'wap-video',
  name: 'wap-video-1',
  info: {
    title: { txt: 'Discover Us', style: { fontSize: '1.3em' }, id: utilService.makeId() },
    embedId: 'G-jPoROGHGE',
    subtitle: { txt: 'Watch the Master in Action!', style: { fontWeight: '600', fontSize: '2.5em' }, id: utilService.makeId() },
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

