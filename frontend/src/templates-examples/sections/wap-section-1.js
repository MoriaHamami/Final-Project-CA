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
    background: "url('https://res.cloudinary.com/dimirmc9j/image/upload/v1673983504/wap-header-1_qd5dap.png')",
    font: "Fontush",
    color: "red",
    height: "200px",
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



