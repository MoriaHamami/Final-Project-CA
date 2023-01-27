import { utilService } from '../../services/util.service.js'


export const wapMap6 = {
  id: utilService.makeId(),
  type: 'wap-map',
  name: 'wap-map-6',
  themePalette: 'primary',
  // theme: 'theme-map-exciting',
  info: {
    map: {
      cords: { lat: 40.83479928947879, lng: 14.106100441161631 },
      zoom: 14,
      type: 'map',
      style: {
        height: '300px',
        width: '100%',
      },
      id: utilService.makeId(),
      key: 'map'
    }
  },
  style: {
    fontFamily: 'fe-serif',
  }
}