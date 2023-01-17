import {utilService} from '../../services/util.service.js'

export const wapFooter1 = {
  name: 'wap-footer-1',
  type: 'container',
  category: 'footer',
  id: utilService.makeId(),
  thumbnail: null,
  style: {},
  cmps: [
    {
      type: 'txt',
      id: utilService.makeId(),
      info: {
        txt: 'Logo',
      },
      style: {
        fontSize: '2rem',
        marginBottom: '0.5rem',
      },
      cmps: [],
    },
    {
      type: 'container',
      id: utilService.makeId(),
      style: {
        display: 'flex',
        gap: '0.25rem',
      },
      cmps: [
        {
          type: 'icon',
          id: utilService.makeId(),
          info: {
            iconName: 'facebook',
          },
          cmps: [],
        },
        {
          type: 'icon',
          id: utilService.makeId(),
          info: {
            iconName: 'instagram',
          },
          cmps: [],
        },
        {
          type: 'icon',
          id: utilService.makeId(),
          info: {
            iconName: 'linkedin',
          },
          cmps: [],
        },
      ],
    },
  ],
}
