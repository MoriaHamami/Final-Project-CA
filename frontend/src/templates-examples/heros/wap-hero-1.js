import {utilService} from '../../services/util.service.js'

export const WapHero1 = {
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
        txt: 'Unlimited Techflow Design for Startups',
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
        txt: 'Superb design tasks to scale your business.',
      },
      style: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: 'rgba(249,245,242,0.5)',
      },
    },
  ],
}
