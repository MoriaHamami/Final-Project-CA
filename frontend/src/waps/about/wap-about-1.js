import { utilService } from '../../services/util.service.js'


export const wapAbout1 = {
  id: utilService.makeId(),
  type: 'wap-about',
  name: 'wap-about-1',
  themePalette: 'primary',
  imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674915430/Webix/wap-about-1_yvzqng.jpg',
  info: {
    subtitle: { txt: 'THE LOVE FOR PIZZA', id: utilService.makeId(), style: { fontWeight: '600', fontSize: '3.5em' }, type: 'txt', key: 'subtitle' },
    title: { txt: 'Our Story', style: { fontSize: '1.5em' }, id: utilService.makeId(), type: 'txt', key: 'title' },
    txt: { txt: 'Mario takes great pride in crafting each pizza with care. He tirelessly experiments with new recipes to perfect his craft. He takes the time to listen to customers\' feedback to improve his pizzas. His enthusiasm for his work is contagious and it\'s clear that he truly loves what he does.', id: utilService.makeId(), style: {}, type: 'txt', key: 'txt' },
    btn: { label: '', link: '', id: utilService.makeId(), type: 'btn', style: {}, key: 'btn' },
    photo: {
      url: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674915430/Webix/wap-about-1_yvzqng.jpg',
      type: 'img',
      id: utilService.makeId(),
      style: {},
      key: 'photo'
    }
  },
  // theme: 'theme-section-happy',
  style: {
    fontFamily: 'fe-serif',
  },
}

// export const wapPreview1 = {
//   id: utilService.makeId(),
//   type: 'wap-preview',
//   name: 'wap-preview-1',
//   info: {
//     subtitle: { txt: 'Our Story', style: { fontSize: '1.5em' }, id: utilService.makeId(), type: 'txt' },
//     title: { txt: 'THE LOVE FOR PIZZA', id: utilService.makeId(), style: { fontWeight: '600', fontSize: '3.5em' }, type: 'txt' },
//     txt: { txt: 'Mario takes great pride in crafting each pizza with care. He tirelessly experiments with new recipes to perfect his craft. He takes the time to listen to customers\' feedback to improve his pizzas. His enthusiasm for his work is contagious and it\'s clear that he truly loves what he does.', style: { fontSize: '1.3em' }, id: utilService.makeId(), type: 'txt' },
//     url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674028653/wap-preview-1-img_cd6mey.jpg',
//   },
//   theme: 'theme-section-happy',
//   style: {
//     // backgroundImage: 'url("https://res.cloudinary.com/dimirmc9j/image/upload/v1674028332/wap-hero-background-1_ydwwdf.jpg")',
//     fontFamily: 'fe-serif',
//     // backgroundColor: 'red',
//   },
// }

