import { utilService } from "../../services/util.service";

export const wapForm2 = {
  id: utilService.makeId(),
  type: 'wap-form',
  name: 'wap-form-2',
  info: {
    title: { txt: 'Ask Us Anything', style: { fontSize: '1.5em' }, id: utilService.makeId() },
    subtitle: { txt: 'info@mysite.com | 123-456-7890', style: { fontSize: '0.9em', fontWeight: '300' }, id: utilService.makeId() },
    inputs: [
      { dataType: 'text', name: 'wap-input', placeholder: 'Name', id: utilService.makeId(), style: { borderRadius: '0.25em' } },
      { dataType: 'text', name: 'wap-input', placeholder: 'Email', id: utilService.makeId(), style: { borderRadius: '0.25em' } },
      { dataType: 'text', name: 'wap-input', placeholder: 'Subject', id: utilService.makeId(), style: { borderRadius: '0.25em' } },
      { dataType: 'textarea', name: 'wap-input', placeholder: 'Type your message here...', id: utilService.makeId(), style: { borderRadius: '0.25em' } }
    ],
    btn: { label: 'Submit', link: '#wc03', style: { borderRadius: '0.25em' } },
  },
  theme: 'theme-section-happy',
  style: {
    fontFamily: 'handlee',
  }
}


