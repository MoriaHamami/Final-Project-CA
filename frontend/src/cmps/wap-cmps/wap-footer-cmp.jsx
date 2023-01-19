import React from 'react'
import { DynamicCmp } from './dynamic-cmp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

export function WapFooter({ style, cmp }) {
  return (
    <div id={cmp.type} style={style} className={cmp.name}>
      <div className="icons-container">
        {cmp?.info.btns.map((btn) => {
          if (btn.label === "facebook") return <FontAwesomeIcon className="footer-icon" icon={faFacebookF} key={btn.id} />
          else if (btn.label === "instagram") return <FontAwesomeIcon className="footer-icon" icon={faInstagram} key={btn.id} />
        })}
      </div>
      <p className="copy-rights">{cmp.info.txt}</p>

    </div>
  )
}
