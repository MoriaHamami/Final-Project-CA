import React from 'react'
// import { DynamicCmp } from './wap-dynamic-cmp'
import { useSelector } from 'react-redux'



export function WapPreview({ style, cmp, onElementClick }) {
  const selectedElementId = useSelector((storestate) => storestate.wapModule.selectedElementId)
  const info = cmp.info

  return (
    <div id={cmp.type} style={style} data-container='parent' className={cmp.name} onClick={onElementClick}>
      <span style={info.subtitle.style} data-container={info.subtitle.id} contentEditable={selectedElementId === info.subtitle.id} onClick={onElementClick} className="subtitle" >{cmp.info.subtitle.txt}</span>
      <h2 style={info.title.style} data-container={info.title.id} contentEditable={selectedElementId === info.title.id} onClick={onElementClick} className="title">{cmp.info.title.txt}</h2>
      {cmp.info.imgUrl && <img src={cmp.info.imgUrl} alt="" />}
      <p style={info.txt.style} data-container={info.txt.id} contentEditable={selectedElementId === info.txt.id} onClick={onElementClick} className="txt">{cmp.info.txt.txt}</p>
      {cmp.info.btn && <button style={info.btn.style} data-container={info.btn.id} contentEditable={selectedElementId === info.btn.id} onClick={onElementClick}>{cmp.info.btn.label}</button>}
    </div>
  )
}
