
import {utilService} from '../../services/util.service.js'

// export const headerWap1 = {
//   id: "wc02",
//   type: "wap-header",
//   info: {
//     title: "HairDresser Baluta",
//     substitle: "Your Hair is !(Who you Are)",
//     btn: { "label": "Schedule Today!", "link": "#wc03" }
//   },
//   theme: "theme-header-happy",
//   style: {
//     background: "url('https://res.cloudinary.com/dimirmc9j/image/upload/v1673983504/wap-header-1_qd5dap.png')",
//     font: "Fontush",
//     color: "red",
//     height: "200px",
//   }
// }


export const headerWap1 = {
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
        txt: 'Techflow',
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
          type: 'img',
          name: 'hamburger',
          id: utilService.makeId(),
          info: {
            imgUrl: 'https://icon-library.com/images/hamburger-menu-icon-png/hamburger-menu-icon-png-29.jpg',
          },
          style: {},
        },
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
