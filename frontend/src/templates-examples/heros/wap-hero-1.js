import { utilService } from '../../services/util.service.js'

export const WapHero1 = {
    id: "wc03",
    type: "wap-hero",
    name: "wap-hero-1",
    info: {
      title: "Mario",
      subtitle: "PIZZA PLACE",
      txt: 'TAKEOUT & DELIVERY',

      btn:{ label: "Order NOW", link: "#wc03" },
    },
    theme: "theme-header-happy",
    style: {
      background: "url('https://res.cloudinary.com/dimirmc9j/image/upload/v1673983504/wap-header-1_qd5dap.png')",
      font: "Fontush",
      color: "red",
      height: "200px",
    }
  }

export const WapHero12 = {
    name: 'wap-hero-1',
    id: utilService.makeId(),
    type: 'container',
    themePalette: 'primary',
    category: 'hero',
    thumbnail: 'https://i.postimg.cc/CxmShs2R/wap-hero-1.png',
    style: {
        color: 'black',
    },

    cmps: [
        {
            type: 'txt',
            id: utilService.makeId(),
            info: {
                txt: 'Mario',
            },
            style: {
                fontSize: '3rem',
                fontWeight: '700',
            },
        },
        {
            type: 'txt',
            id: utilService.makeId(),
            info: {
                txt: 'PIZZA PLACE',
            },
            style: {
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'rgba(249,245,242,0.5)',
            },
        },
        {
            type: 'txt',
            id: utilService.makeId(),
            info: {
                txt: 'TAKEOUT & DELIVERY',
            },
            style: {
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'rgba(249,245,242,0.5)',
            },

        },
    ],
}
