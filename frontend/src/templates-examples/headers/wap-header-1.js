
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
