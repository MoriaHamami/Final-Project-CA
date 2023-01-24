import { utilService } from '../../services/util.service.js'


export const wapVideo1 = {
  id: utilService.makeId(),
  type: 'wap-video',
  name: 'wap-video-1',
  info: {
    title: { txt: 'Discover Us', style: { fontSize: '1.3em' }, id: utilService.makeId(), type: 'txt' },
    subtitle: { txt: 'Watch the Master in Action!', style: { fontWeight: '600', fontSize: '2.5em' }, id: utilService.makeId(), type: 'txt' },
    video: {
      type: 'video',
      id: utilService.makeId(),
      // embedId: 'G-jPoROGHGE',
      // CHANGE TO SRC
      url: 'https://www.youtube.com/embed/G-jPoROGHGE',
      style: {
        width: '50%',
        minWidth: '300px',
        border: 'none',
        aspectRatio: 16 / 9
      }
    }
    // iframeStyle: {
    //   // height: '100%',
    //   // padding: 0,
    //   // margin: 0,
    // }
  },
  // cmps: [],
  theme: 'theme-section-happy',
  style: {
    fontFamily: 'fe-serif',
  },
}

