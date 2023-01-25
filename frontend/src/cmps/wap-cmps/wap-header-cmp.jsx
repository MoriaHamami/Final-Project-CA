import React from 'react'
import { useState } from "react"

import { useSelector } from 'react-redux'
import { wapHero1 } from '../../waps/heros/wap-hero-1'

export function HeaderCmp({ style, cmp, onElClick, onElementTxtChange, selectedCmpId }) {
  const [isOn, setIsOn] = useState({ cmp: false, title: false, subtitle: false, txt: false, btn: false, img: false, logo: false, login: false })


  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
  const info = cmp.info

  return (
    <div id={cmp.type} data-container={JSON.stringify(cmp)} style={style} onClick={onElClick}
      className={((selectedCmpId === cmp.id && selectedElement?.id === cmp.id) ? 'selected' : '') + ' ' + cmp.name + ' ' + (selectedElement?.id !== cmp.id && isOn.cmp && 'hover-cmp')}
      onMouseOut={() => setIsOn((prevIsOn) => {
        return { ...prevIsOn, cmp: false }
      })}
      onMouseOver={() => setIsOn((prevIsOn) => {
        return { ...prevIsOn, cmp: true }
      })}>
      <p suppressContentEditableWarning={true}
        contentEditable={selectedElement?.id === info.logo.id}
        data-container={JSON.stringify(info.logo)}
        className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.logo.id) ? 'selected' : ''} logo ${selectedElement?.id !== info.logo.id && isOn.logo && 'hover'}`}
        onMouseOut={() => setIsOn((prevIsOn) => {
          return { ...prevIsOn, logo: false }
        })}
        onMouseOver={() => setIsOn((prevIsOn) => {
          return { ...prevIsOn, logo: true }
        })}
        style={info.logo.style}
        onClick={onElClick}
        onInput={ev => onElementTxtChange(ev.currentTarget.textContent)}>{info.logo.txt}</p>
      {/* <span className="material-symbols-outlined menu-btn">menu</span> */}
      <nav className="nav-bar">
        {info.btns?.map((btn, idx) => {
          return <a suppressContentEditableWarning={true}
            className={`${(selectedCmpId === cmp.id && selectedElement?.id === btn.id) ? 'selected' : ''}  ${selectedElement?.id !== btn.id && isOn['btn' + idx] && 'hover'}`}
            onMouseOut={() => setIsOn((prevIsOn) => {
              return { ...prevIsOn, ['btn' + idx]: false }
            })}
            onMouseOver={() => setIsOn((prevIsOn) => {
              return { ...prevIsOn, ['btn' + idx]: true }
            })}
            contentEditable={selectedElement?.id === btn.id}
            style={btn.style}
            data-container={JSON.stringify(btn)}
            href={btn.link}
            onClick={onElClick}
            onInput={ev => onElementTxtChange(ev.currentTarget.textContent)}
            key={btn.id}>{btn.label}</a>
        })}
      </nav>
      {info.login && <a suppressContentEditableWarning={true}
        contentEditable={selectedElement?.id === info.login.id}
        className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.login.id) ? 'selected' : ''} login ${selectedElement?.id !== info.login.id && isOn.login && 'hover'}`}
        onMouseOut={() => setIsOn((prevIsOn) => {
          return { ...prevIsOn, login: false }
        })}
        onMouseOver={() => setIsOn((prevIsOn) => {
          return { ...prevIsOn, login: true }
        })}
        style={info.login.style}
        data-container={JSON.stringify(info.login)}
        href={info.login.link}
        onClick={onElClick}
        onInput={ev => onElementTxtChange(ev.currentTarget.textContent)}
        key={info.login.id}>{info.login.label}</a>}
    </div>
  )
}

{/* <button contentEditable={selectedElementId === info.btn.id} style={info.btn.style} data-container={info.btn.id} href={info.btn.link}>{cmp.info.btn.label}</button> */ }
