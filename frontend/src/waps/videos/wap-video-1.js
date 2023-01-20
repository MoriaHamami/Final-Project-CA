import { utilService } from '../../services/util.service.js'


export const wapVideo1 = {
  id: utilService.makeId(),
  type: 'wap-video',
  name: 'wap-video-1',
  info: {
    subtitle: 'Our Story',
    title: 'THE LOVE FOR PIZZA',
    embedId: 'G-jPoROGHGE',
    txt: 'Mario takes great pride in crafting each pizza with care. He tirelessly experiments with new recipes to perfect his craft. He takes the time to listen to customers\' feedback to improve his pizzas. His enthusiasm for his work is contagious and it\'s clear that he truly loves what he does.',
    iframeStyle: {
      width: '100%',
      height: '100%',
      aspectRatio: 16 / 9
    }
  },
  // cmps: [],
  theme: 'theme-section-happy',
  style: {},
}

