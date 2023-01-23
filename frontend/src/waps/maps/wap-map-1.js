import { utilService } from '../../services/util.service.js'


export const wapMap1 = {
  id: utilService.makeId(),
  type: 'wap-map',
  name: 'wap-map-1',
  theme: 'theme-map-exciting',
  info: {
    title: { txt: 'Our location', style: { fontSize: '1.3em', fontFamily: 'fe-serif' }, id: utilService.makeId(), type: 'txt' },
    cords: { lat: 40.83479928947879, lng: 14.106100441161631 },
    zoom: 14,
  },
  style: {
    fontFamily: 'fe-serif',
    height: '200px',
    width: '70%',
  }
}



