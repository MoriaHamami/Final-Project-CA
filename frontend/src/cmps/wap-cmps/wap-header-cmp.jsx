import React from 'react'

import { useSelector } from 'react-redux'
import { wapHero1 } from '../../waps/heros/wap-hero-1'

export function HeaderCmp({ style, cmp, onElClick, onElementTxtChange, selectedCmpId }) {

  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
  const info = cmp.info

  return (
    <div id={cmp.type} data-container={JSON.stringify(cmp)} style={style} className={cmp.name} onClick={onElClick}>
      <p suppressContentEditableWarning={true}
        contentEditable={selectedElement?.id === info.logo.id}
        data-container={JSON.stringify(info.logo)}
        className="logo" style={info.logo.style}
        onClick={onElClick}
        onInput={ev => onElementTxtChange(ev.currentTarget.textContent)}>{info.logo.txt}</p>
      {/* <span className="material-symbols-outlined menu-btn">menu</span> */}
      <nav className="nav-bar">
        {info.btns?.map((btn) => {
          return <a suppressContentEditableWarning={true}
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
        className="login"
        contentEditable={selectedElement?.id === info.login.id}
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
