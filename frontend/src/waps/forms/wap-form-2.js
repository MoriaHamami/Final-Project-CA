import { utilService } from "../../services/util.service";

export const wapForm2 = {
  id: utilService.makeId(),
  type: 'wap-form',
  name: 'wap-form-2',
  info: {
    title: { txt: 'Ask Us Anything', style: {}, id: utilService.makeId() },
    subtitle: { txt: 'info@mysite.com | 123-456-7890', style: {}, id: utilService.makeId() },
    inputs: [
      { dataType: 'text', name: 'wap-input', placeholder: 'Name', id: utilService.makeId(), style: {} },
      { dataType: 'text', name: 'wap-input', placeholder: 'Email', id: utilService.makeId(), style: {} },
      { dataType: 'text', name: 'wap-input', placeholder: 'Subject', id: utilService.makeId(), style: {} },
      { dataType: 'text', name: 'wap-input', placeholder: 'Type your message here...', id: utilService.makeId(), style: {} }
    ],
    btn: { label: 'Submit', link: '#wc03', style: {} },
  },
  theme: 'theme-section-happy',
  style: { color: 'red' }
}


