import React, { useState } from 'react'

import { useSelector } from 'react-redux'

export function HeroCmp({ style, cmp, onElClick, selectedCmpId }) {
  const [isOn, setIsOn] = useState({ cmp: false, title: false, subtitle: false, txt: false, btn: false })
  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
  const info = cmp.info

  return (

    <div id={cmp.type}
      style={style}
      data-container={JSON.stringify(cmp)}
      onClick={onElClick}
      className={((selectedCmpId === cmp.id && selectedElement?.id === cmp.id) ? 'selected' : '') + ' ' + cmp.name + ' ' + (selectedElement?.id !== cmp.id && isOn.cmp && 'hover')}
      onMouseOut={() => setIsOn((prevIsOn) => {
        return { ...prevIsOn, cmp: false }
      })}
      onMouseOver={() => setIsOn((prevIsOn) => {
        return { ...prevIsOn, cmp: true }
      })}>
      <div className='wap-hero-container'>

        <p suppressContentEditableWarning={true}
          contentEditable={selectedElement?.id === info.title.id}
          style={info.title.style}
          // className="title"
          data-container={JSON.stringify(info.title)}
          className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.title.id) ? 'selected' : ''} title ${selectedElement?.id !== info.title.id && isOn.title && 'hover-cmp'}`}
          onMouseOut={() => setIsOn((prevIsOn) => {
            return { ...prevIsOn, title: false }
          })}
          // onMouseOver={() => setIsOn(true)}
          onMouseOver={() => setIsOn((prevIsOn) => {
            return { ...prevIsOn, title: true }
          })}
          onClick={onElClick}>
          {info.title.txt}
        </p>

        {info.subtitle && <p
          suppressContentEditableWarning={true}
          contentEditable={selectedElement?.id === info.subtitle.id}
          style={info.subtitle.style}
          data-container={JSON.stringify(info.subtitle)}
          className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.subtitle.id) ? 'selected' : ''} subtitle ${selectedElement?.id !== info.subtitle.id && isOn.subtitle && 'hover'}`}
          // onMouseOut={() => setIsOn(false)}
          onMouseOut={() => setIsOn((prevIsOn) => {
            return { ...prevIsOn, subtitle: false }
          })}
          // onMouseOver={() => setIsOn(true)}
          onMouseOver={() => setIsOn((prevIsOn) => {
            return { ...prevIsOn, subtitle: true }
          })}
          onClick={onElClick}>
          {info.subtitle.txt}
        </p>}

        {info.txt && <p
          suppressContentEditableWarning={true}
          contentEditable={selectedElement?.id === info.txt.id}
          style={info.txt.style}
          data-container={JSON.stringify(info.txt)}
          className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.txt.id) ? 'selected' : ''} txt ${selectedElement?.id !== info.txt.id && isOn.txt && 'hover'}`}
          onMouseOut={() => setIsOn((prevIsOn) => {
            return { ...prevIsOn, txt: false }
          })}
          onMouseOver={() => setIsOn((prevIsOn) => {
            return { ...prevIsOn, txt: true }
          })}
          onClick={onElClick}>
          {info.txt.txt}
        </p>}

        {info.btn && <nav>
          <button suppressContentEditableWarning={true}
            contentEditable={selectedElement?.id === info.btn.id}
            style={info.btn.style}
            data-container={JSON.stringify(info.btn)}
            className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.btn.id) ? 'selected' : ''} ${selectedElement?.id !== info.btn.id && isOn.btn && 'hover'}`}
            onMouseOut={() => setIsOn((prevIsOn) => {
              return { ...prevIsOn, btn: false }
            })}
            onMouseOver={() => setIsOn((prevIsOn) => {
              return { ...prevIsOn, btn: true }
            })}
            href={info.btn.link}>
            {cmp.info.btn.label}
          </button>
        </nav>}

        {info.photo && <div className="img-container">
                <img src={info.photo.url} alt={''} suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.photo.id} style={info.photo.style} data-container={JSON.stringify(info.photo)} onClick={onElClick} />
            </div >}
      </div>

    </div >
  )
}
