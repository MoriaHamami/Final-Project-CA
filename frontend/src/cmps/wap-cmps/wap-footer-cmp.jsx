import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

export function WapFooter({ style, cmp, onElClick }) {

  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
  const info = cmp.info

  return (
    <div id={cmp.type} style={style} data-container={JSON.stringify(cmp)} className={cmp.name} onClick={onElClick}>
      <div className="icons-container">
        {info.btns?.map((btn) => {
          if (btn.label === "facebook") return <FontAwesomeIcon className="footer-icon" icon={faFacebookF} key={btn.id} />
          else if (btn.label === "instagram") return <FontAwesomeIcon className="footer-icon" icon={faInstagram} key={btn.id} />
          else return ''
        })}
      </div>
      {info.txt?.txt && <p suppressContentEditableWarning={true} style={info.txt.style} onClick={onElClick} contentEditable={selectedElement?.id === info.txt.id} data-container={JSON.stringify(info.txt)} className="copy-rights">{info.txt.txt}</p>}

    </div>
  )
}
