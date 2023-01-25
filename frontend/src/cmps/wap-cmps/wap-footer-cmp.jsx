import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export function WapFooter({ style, cmp, onElClick, selectedCmpId }) {

  const [isOn, setIsOn] = useState({ cmp: false, title: false, subtitle: false, txt: false, btn: false, img: false, icons: false })



  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
  const info = cmp.info

  return (
    <div id={cmp.type} style={style} data-container={JSON.stringify(cmp)} onClick={onElClick}
      className={((selectedCmpId === cmp.id && selectedElement?.id === cmp.id) ? 'selected' : '') + ' ' + cmp.name + ' ' + (selectedElement?.id !== cmp.id && isOn.cmp && 'hover')}
      onMouseOut={() => setIsOn((prevIsOn) => {
        return { ...prevIsOn, cmp: false }
      })}
      onMouseOver={() => setIsOn((prevIsOn) => {
        return { ...prevIsOn, cmp: true }
      })}
    >
      <div className="icons-container">
        {info.btns?.map((btn) => {
          if (btn.label === "facebook") return <FontAwesomeIcon className="footer-icon" style={btn.style} icon={faFacebookF} key={btn.id} />
          else if (btn.label === "instagram") return <FontAwesomeIcon className="footer-icon" style={btn.style} icon={faInstagram} key={btn.id} />
          else if (btn.label === "linkedin") return <FontAwesomeIcon className="footer-icon" style={btn.style} icon={faLinkedin} key={btn.id} />
          else if (btn.label === "twitter") return <FontAwesomeIcon className="footer-icon" style={btn.style} icon={faTwitter} key={btn.id} />
          else return ''
        })}
      </div>
      {info.txt?.txt && <p
        className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.txt.id) ? 'selected' : ''} copy-rights ${selectedElement?.id !== info.txt.id && isOn.txt && 'hover'}`}
        onMouseOut={() => setIsOn((prevIsOn) => {
          return { ...prevIsOn, txt: false }
        })}
        onMouseOver={() => setIsOn((prevIsOn) => {
          return { ...prevIsOn, txt: true }
        })}
        suppressContentEditableWarning={true} style={info.txt.style} onClick={onElClick} contentEditable={selectedElement?.id === info.txt.id} data-container={JSON.stringify(info.txt)} >{info.txt.txt}</p>}

    </div>
  )
}
