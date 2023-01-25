import { utilService } from '../../services/util.service.js'

export const wapHero4 = {
  id: utilService.makeId(),
  type: 'wap-hero',
  name: 'wap-hero-4',
  info: {
    title: { txt: 'GOMOBILE', style: { fontFamily: 'open-sans', fontWeight: '600', fontSize: '4em',  color: 'white', textAlign:'center', letterSpacing: '0.3em' }, id: utilService.makeId(), type: 'txt' },
    subtitle: { txt: 'We are strategic consulting & media agency for apps. We are committed to meeting your company’s needs.', style: { fontSize: '1.1em',  color: 'white', textAlign:'center' }, id: utilService.makeId(), type: 'txt' },
    btn: { label: 'LEARN MORE', link: '#wc20b', id: utilService.makeId(), style: { fontSize: '0.8em', color:'white', backgroundColor: '#34d1b6', borderRadius: '2rem' }, type: 'btn' },
    photo: {
        url: 'https://res.cloudinary.com/dimirmc9j/image/upload/v1674584238/demo4phone_odtuuk.png',
        type: 'img',
        id: utilService.makeId()
      },
  },
  theme: 'theme-header-happy',
  style: {
    backgroundImage: 'url("https://res.cloudinary.com/dimirmc9j/image/upload/v1674583178/demo4hero_k3i3u6.png")',
    fontFamily: 'roboto-light',
  }
}
