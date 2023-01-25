import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export function WapFooter({ style, cmp, onElClick, selectedCmpId }) {

  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
  const info = cmp.info

  return (
    <div id={cmp.type} style={style} data-container={JSON.stringify(cmp)} className={cmp.name} onClick={onElClick}>
      <div className="icons-container">
        {info.btns?.map((btn) => {
          if (btn.label === "facebook") return <FontAwesomeIcon className="footer-icon" style={btn.style} icon={faFacebookF} key={btn.id} />
          else if (btn.label === "instagram") return <FontAwesomeIcon className="footer-icon" style={btn.style} icon={faInstagram} key={btn.id} />
          else if (btn.label === "linkedin") return <FontAwesomeIcon className="footer-icon" style={btn.style} icon={faLinkedin} key={btn.id} />
          else if (btn.label === "twitter") return <FontAwesomeIcon className="footer-icon" style={btn.style} icon={faTwitter} key={btn.id} />
          else return ''
        })}
      </div>
      {info.txt?.txt && <p suppressContentEditableWarning={true} style={info.txt.style} onClick={onElClick} contentEditable={selectedElement?.id === info.txt.id} data-container={JSON.stringify(info.txt)} className="copy-rights">{info.txt.txt}</p>}

    </div>
  )
}
