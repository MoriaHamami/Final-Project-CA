import { utilService } from '../../services/util.service.js'


export const wapMap1 = {

  id: utilService.makeId(),
  type: 'wap-map',
  name: 'wap-map-1',
  info: {
    name: { txt: 'Our location', style: { fontSize: '1.3em', fontFamily: 'fe-serif' }, id: utilService.makeId() },
    cords: { lat: 40.83479928947879, lng: 14.106100441161631 },
    zoom: 14,
  },
  theme: 'theme-map-exciting',
  style: {
    fontFamily: 'fe-serif',
    height: '200px',
    width: '70%',
  }
}



