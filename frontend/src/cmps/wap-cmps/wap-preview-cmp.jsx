import React from 'react'
// import { DynamicCmp } from './wap-dynamic-cmp'
import { useSelector } from 'react-redux'



export function WapPreview({ style, cmp, onElClick }) {
  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
  const info = cmp.info

  return (
    <div id={cmp.type} style={style} data-container={JSON.stringify(cmp)} className={cmp.name} onClick={onElClick}>
      <span style={info.subtitle.style} data-container={JSON.stringify(info.subtitle)} suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.subtitle.id} onClick={onElClick} className="subtitle" >{cmp.info.subtitle.txt}</span>
      <h2 style={info.title.style} data-container={JSON.stringify(info.title)} suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.title.id} onClick={onElClick} className="title">{cmp.info.title.txt}</h2>
      {cmp.info.imgUrl && <img src={cmp.info.imgUrl} alt="" />}
      <p style={info.txt.style} data-container={JSON.stringify(info.txt)} suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.txt.id} onClick={onElClick} className="txt">{cmp.info.txt.txt}</p>
      {cmp.info.btn && <button style={info.btn.style} data-container={JSON.stringify(info.btn)} suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.btn.id} onClick={onElClick}>{cmp.info.btn.label}</button>}
    </div>
  )
}
