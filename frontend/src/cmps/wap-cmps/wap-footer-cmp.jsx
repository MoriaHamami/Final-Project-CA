import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

export function WapFooter({ style, cmp }) {
  const selectedElementId = useSelector((storestate) => storestate.wapModule.selectedElementId)
  const info = cmp.info

  // contentEditable={selectedElementId === info.logo.id}
  // data-container={info.logo.id}
  // style={info.logo.style}
  // onClick={handleChooseContainer}

  return (
    <div id={cmp.type} style={style} className={cmp.name}>
      <div className="icons-container">
        {info.btns?.map((btn) => {
          if (btn.label === "facebook") return <FontAwesomeIcon className="footer-icon" icon={faFacebookF} key={btn.id} />
          else if (btn.label === "instagram") return <FontAwesomeIcon className="footer-icon" icon={faInstagram} key={btn.id} />
        })}
      </div>
      {info.txt && <p className="copy-rights">{info.txt}</p>}

    </div>
  )
}
