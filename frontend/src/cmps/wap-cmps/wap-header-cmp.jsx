import React from 'react'

import { useSelector } from 'react-redux'

export function WapHeader({ style, cmp, onElementClick, getText }) {


  const selectedElementId = useSelector((storestate) => storestate.wapModule.selectedElementId, getText)
  const info = cmp.info

  return (
    <div id={cmp.type} data-container='parent' style={style} className={cmp.name} onClick={onElementClick}>
      <p suppressContentEditableWarning={true} contentEditable={selectedElementId === info.logo.id} data-container={info.logo.id} className="logo" style={info.logo.style} onClick={onElementClick}
       onInput={ev => getText(ev.currentTarget.textContent)}>{info.logo.txt}</p>
      {/* <span className="material-symbols-outlined menu-btn">menu</span> */}
      <nav className="nav-bar">
        {info.btns?.map((btn) => {
          return <a suppressContentEditableWarning={true} contentEditable={selectedElementId === btn.id} style={btn.style} data-container={btn.id} href={btn.link} key={btn.id}>{btn.label}</a>
        })}
      </nav>
</div>
)
}

{/* <button contentEditable={selectedElementId === info.btn.id} style={info.btn.style} data-container={info.btn.id} href={info.btn.link}>{cmp.info.btn.label}</button> */}
