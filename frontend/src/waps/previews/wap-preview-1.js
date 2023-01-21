import { utilService } from '../../services/util.service.js'


export const wapPreview1 = {
  id: utilService.makeId(),
  type: 'wap-preview',
  name: 'wap-preview-1',
  info: {
    subtitle: { txt: 'Our Story', style: {}, id: utilService.makeId() },
    title: { txt: 'THE LOVE FOR PIZZA', id: utilService.makeId(), style: {} },
    imgUrl: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674028653/wap-preview-1-img_cd6mey.jpg',
    txt: { txt: 'Mario takes great pride in crafting each pizza with care. He tirelessly experiments with new recipes to perfect his craft. He takes the time to listen to customers\' feedback to improve his pizzas. His enthusiasm for his work is contagious and it\'s clear that he truly loves what he does.', style: {}, id: utilService.makeId() }
  },
  theme: 'theme-section-happy',
  style: {
    // backgroundImage: 'url("https://res.cloudinary.com/dimirmc9j/image/upload/v1674028332/wap-hero-background-1_ydwwdf.jpg")',
    fontFamily: 'fe-serif',
    // backgroundColor: 'red',
  },
}

