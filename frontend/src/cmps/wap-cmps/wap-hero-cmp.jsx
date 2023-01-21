import React from 'react'

import { useSelector } from 'react-redux'

export function WapHero({ style, cmp, onElementClick }) {
  const selectedElementId = useSelector((storestate) => storestate.wapModule.selectedElementId)
  const info = cmp.info


  return (
    <div id={cmp.type} style={style} className={cmp.name} data-container='parent' onClick={onElementClick}>
        <div>
            <p contentEditable={selectedElementId === info.title.id} style={info.title.style} className="title" data-container={info.title.id} onClick={onElementClick}>{info.title.txt}</p> 
            <p contentEditable={selectedElementId === info.txt.id} style={info.txt.style} className="txt" data-container={info.txt.id} onClick={onElementClick}>{info.txt.txt}</p>
        </div>
        <nav>
         <button contentEditable={selectedElementId === info.btn.id} style={info.btn.style} data-container={info.btn.id} href={info.btn.link}>{cmp.info.btn.label}</button>
      </nav>
    </div>
  )
}
