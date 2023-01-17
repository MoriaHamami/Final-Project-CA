import {utilService} from '../../services/util.service.js'

//   thumbnail: require('../../../assets/img/thumbnails/section/wap-section-1.jpg'),
export const wapSection1 = {
  type: 'container',
  name: 'wap-cards-2',
  themePalette: 'secondary',
  category: 'cards',
  thumbnail: "url('https://res.cloudinary.com/dimirmc9j/image/upload/v1673819141/%D7%A6%D7%91%D7%90_%D7%A2%D7%9D_%D7%92%D7%9C_dxaphz.jpg')",
  id: utilService.makeId(),
  style: {
    backgroundColor: '#1b1b1b',
    color: 'black'
  },
  cmps: [
    {
      type: 'txt',
      name: 'wap-cards-2-sub-header',
      id: utilService.makeId(),
      info: {
        txt: 'AENEAN CONSECTETUR PORTA',
      },
      style: {
        fontSize: '0.75rem',
      },
    },
    {
      type: 'txt',
      name: 'wap-cards-2-main-header',
      id: utilService.makeId(),
      info: {
        txt: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
      },
      style: {
        fontSize: '2.375rem',
      },
    },
    {
      type: 'img',
      name: 'wap-cards-2-img-container',
      id: utilService.makeId(),
      style: {},
      info: {
        imgUrl: 'https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5afa1b861bc189407c1a9b2c_dash-device.png',
      },
    },
  ],
}
