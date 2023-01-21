import React from 'react'

import { useSelector } from 'react-redux'

export function WapHero({ style, cmp, onElClick }) {
  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
  const info = cmp.info

  return (
    <div id={cmp.type} style={style} className={cmp.name} data-container={JSON.stringify(cmp)} onClick={onElClick}>
      <div>
        <p suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.title.id} style={info.title.style} className="title" data-container={JSON.stringify(info.title)} onClick={onElClick}>{info.title.txt}</p>
        {info.txt && <p suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.txt.id} style={info.txt.style} className="txt" data-container={JSON.stringify(info.txt)} onClick={onElClick}>{info.txt.txt}</p>}
      </div>
      <nav>
        <button suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.btn.id} style={info.btn.style} data-container={JSON.stringify(info.btn)} href={info.btn.link}>{cmp.info.btn.label}</button>
      </nav>
    </div>
  )
}
