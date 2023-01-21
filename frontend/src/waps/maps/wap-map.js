import { utilService } from '../../services/util.service.js'


export const wapMap1 = {

  id: utilService.makeId(),
  type: 'wap-map',
  name: 'wap-map-1',
  info: {
    name: { txt: 'Our palce location', style: {}, id: utilService.makeId() },
    cords: { lat: 40.83479928947879, lng: 14.106100441161631 },
    zoom: 18,
    txt: { txt: 'Mario takes great pride in crafting each pizza with care. He tirelessly experiments with new recipes to perfect his craft. He takes the time to listen to customers\' feedback to improve his pizzas. His enthusiasm for his work is contagious and it\'s clear that he truly loves what he does.', style: {}, id: utilService.makeId() }
  },
  theme: 'theme-map-exciting',
  style: {
    height: '300px'

  }
}



