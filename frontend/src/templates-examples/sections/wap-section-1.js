import { utilService } from '../../services/util.service.js'

//   thumbnail: require('../../../assets/img/thumbnails/section/wap-section-1.jpg'),
export const WapSection1 = {
  id: "wc04",
  type: "container",
  name: "wap-section-1",
  info: {
    btn: [],
    txt: 'AENEAN CONSECTETUR PORTA. Nullam quis risus eget urna mollis ornare vel eu leo.'
  },
  theme: "theme-section-happy",
  style: {
    background: "url('https://res.cloudinary.com/dimirmc9j/image/upload/v1673814062/%D7%95%D7%95%D7%90%D7%99_%D7%95%D7%95%D7%A9_%D7%91%D7%9C%D7%99%D7%9C%D7%94_b4urev.jpg')",
    font: "Fontush",
  },
  cmps: [
    {
      type: 'card',
      name: 'wap-cards-2-img-container',
      id: utilService.makeId(),
      style: {},
      info: {
        txt: '',
        imgUrl: 'https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5afa1b861bc189407c1a9b2c_dash-device.png',
      },
    },
  ]
}


// export const wapSection12 = {
//   type: 'container',
//   name: 'wap-cards-2',
//   themePalette: 'secondary',
//   category: 'cards',
//   thumbnail: "url('https://res.cloudinary.com/dimirmc9j/image/upload/v1673819141/%D7%A6%D7%91%D7%90_%D7%A2%D7%9D_%D7%92%D7%9C_dxaphz.jpg')",
//   id: utilService.makeId(),
//   style: {
//     backgroundColor: '#1b1b1b',
//     color: 'black'
//   },
// }
