import { utilService } from "../../services/util.service";

export const wapForm3 = {
  id: utilService.makeId(),
  type: 'wap-form',
  name: 'wap-form-3',
  themePalette: 'secondary',
  imgUrl: 'https://res.cloudinary.com/dvnxslwcz/image/upload/v1674681545/Webix/wap-form-3_es6eh3.jpg',

  info: {
    title: { txt: 'Contact Me', style: { fontSize: '1.5em', fontFamily: 'playfair-regular', fontStyle: 'italic', color: 'rgb(163,95,80)' }, id: utilService.makeId(), type: 'txt', key: 'title' },
    subtitle: { txt: 'info@mysite.com | 123-456-7890', style: { fontSize: '1.3em', fontWeight: '300', fontFamily: 'playfair-regular', color: 'rgb(163,95,80)', fontStyle: 'italic' }, id: utilService.makeId(), type: 'txt', key: 'subtitle' },
    inputs: [
      { dataType: 'text', name: 'wap-input', placeholder: 'Name', id: utilService.makeId(), style: { borderRadius: '0.25em', color: 'white' }, type: 'input', key: 'inputs' },
      { dataType: 'text', name: 'wap-input', placeholder: 'Email', id: utilService.makeId(), style: { borderRadius: '0.25em', color: 'white' }, type: 'input', key: 'inputs' },
      { dataType: 'textarea', name: 'wap-input', placeholder: 'Type your message here...', id: utilService.makeId(), style: { borderRadius: '0.25em', color: 'white' }, type: 'input', key: 'inputs' }
    ],
    btn: { label: 'Submit', link: '#wc03', style: { borderRadius: '0.25em', fontSize: '1.1em', fontFamily: 'playfair-regular', fontStyle: 'italic', color: 'white' }, type: 'btn', key: 'btn' },
  },
  // theme: 'theme-section-happy',
  style: {
    fontFamily: 'roboto-light',
  }
}


