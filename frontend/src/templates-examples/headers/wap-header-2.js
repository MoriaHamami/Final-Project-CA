
import { utilService } from '../../services/util.service.js'

export const wapHeader2 = {
  id: "wc22",
  type: "wap-header",
  name: "wap-header-2",
  info: {
    logo: "Urban Nomad Adventures",
    btns: [
      { label: "Home", link: "#wc23" },
      { label: "About", link: "#wc24" },
      { label: "Book Online", link: "#wc25" }
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
