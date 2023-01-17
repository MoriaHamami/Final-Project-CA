
import { utilService } from '../../services/util.service.js'

export const WapHeader1 = {
  id: "wc02",
  type: "wap-header",
  name: "wap-header-1",
  info: {
    logo: "MarioPizza",
    btns: [
      { label: "Home", link: "#wc03" },
      { label: "About", link: "#wc04" },
      { label: "Contact Us", link: "#wc05" }
    ]
  },
  theme: "theme-header-happy",
  style: {
    background: "url('https://res.cloudinary.com/dimirmc9j/image/upload/v1673983504/wap-header-1_qd5dap.png')",
    font: "Fontush",
    color: "red",
    height: "200px",
  }
}


export const WapHeader12 = {
  name: 'wap-header-1',
  type: 'container',
  category: 'header',
  themePalette: 'secondary',
  id: utilService.makeId(),
  //change to cloudinary
  thumbnail: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1673983504/wap-header-1_qd5dap.png',
  //each component will have his own css file
  style: {},
  cmps: [
    {
      type: 'txt',
      id: utilService.makeId(),
      info: {
        txt: 'MarioPizza',
      },
      style: {
        fontSize: '2rem',
        fontWeight: '700',
        margin: 0,
      },
    },
    {
      type: 'container',
      name: 'nav-bar',
      id: utilService.makeId(),
      style: {},
      cmps: [
        {
          type: 'txt',
          id: utilService.makeId(),
          info: {
            txt: 'Home',
          },
          style: {},
          cmps: [],
        },

        {
          type: 'txt',
          id: utilService.makeId(),
          info: {
            txt: 'About',
          },
          style: {},
          cmps: [],
        },
        {
          type: 'txt',
          id: utilService.makeId(),
          info: {
            txt: 'Contact Us',
          },
          style: {},
          cmps: [],
        },
      ],
    },
  ],
}
