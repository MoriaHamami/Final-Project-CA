import { utilService } from '../../services/util.service.js'


export const wapMap1 = {

  id: utilService.makeId(),
  type: 'wap-map',
  name: 'wap-map-1',
  info: {
    name: { txt: 'Our place location', style: {}, id: utilService.makeId() },
    cords: { lat: 40.83479928947879, lng: 14.106100441161631 },
    zoom: 14,
  },
  theme: 'theme-map-exciting',
  style: {
    height: '200px',
    width: '50%',

  }
}



