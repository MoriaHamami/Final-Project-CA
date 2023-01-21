import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

export function WapFooter({ style, cmp, onElementClick }) {

  const selectedElementId = useSelector((storestate) => storestate.wapModule.selectedElementId)
  const info = cmp.info
  // contentEditable={selectedElementId === info.logo.id}
  // data-container={info.logo.id}
  // style={info.logo.style}
  // onClick={handleChooseContainer}

  return (
    <div id={cmp.type} style={style} data-container='parent' className={cmp.name} onClick={onElementClick}>
      <div className="icons-container">
        {info.btns?.map((btn) => {
          if (btn.label === "facebook") return <FontAwesomeIcon className="footer-icon" icon={faFacebookF} key={btn.id} />
          else if (btn.label === "instagram") return <FontAwesomeIcon className="footer-icon" icon={faInstagram} key={btn.id} />
          else return ''
        })}
      </div>
      {info.txt?.txt && <p suppressContentEditableWarning={true} style={info.txt.style} onClick={onElementClick} contentEditable={selectedElementId === info.txt.id} data-container={info.txt.id} className="copy-rights">{info.txt.txt}</p>}

    </div>
  )
}
