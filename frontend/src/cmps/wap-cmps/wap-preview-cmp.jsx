// import React, { useState } from 'react'
// // import { DynamicCmp } from './wap-dynamic-cmp'
// import { useSelector } from 'react-redux'



// export function WapPreview({ style, cmp, onElClick, selectedCmpId }) {
//   const [isOn, setIsOn] = useState({ cmp: false, title: false, subtitle: false, txt: false, btn: false, img: false })

//   const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
//   const info = cmp.info

//   return (
//     <div id={cmp.type} style={style} data-container={JSON.stringify(cmp)}
//       className={((selectedCmpId === cmp.id && selectedElement?.id === cmp.id) ? 'selected' : '') + ' ' + cmp.name + ' ' + (selectedElement?.id !== cmp.id && isOn.cmp && 'hover')}
//       onMouseOut={() => setIsOn((prevIsOn) => {
//         return { ...prevIsOn, cmp: false }
//       })}
//       onMouseOver={() => setIsOn((prevIsOn) => {
//         return { ...prevIsOn, cmp: true }
//       })}
//       onClick={onElClick}>
//       <span style={info.subtitle.style} data-container={JSON.stringify(info.subtitle)} suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.subtitle.id} onClick={onElClick}
//         className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.subtitle.id) ? 'selected' : ''} subtitle ${selectedElement?.id !== info.subtitle.id && isOn.subtitle && 'hover'}`}
//         onMouseOut={() => setIsOn((prevIsOn) => {
//           return { ...prevIsOn, subtitle: false }
//         })}
//         // onMouseOver={() => setIsOn(true)}
//         onMouseOver={() => setIsOn((prevIsOn) => {
//           return { ...prevIsOn, subtitle: true }
//         })}
//       >{info.subtitle.txt}</span>
//       <h2 style={info.title.style} data-container={JSON.stringify(info.title)} suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.title.id} onClick={onElClick}
//         className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.title.id) ? 'selected' : ''} title ${selectedElement?.id !== info.title.id && isOn.title && 'hover'}`}
//         onMouseOut={() => setIsOn((prevIsOn) => {
//           return { ...prevIsOn, title: false }
//         })}
//         onMouseOver={() => setIsOn((prevIsOn) => {
//           return { ...prevIsOn, title: true }
//         })}
//       >{cmp.info.title.txt}</h2>
//       {cmp.info.url && <img src={cmp.info.url} alt="" />}
//       <p style={info.txt.style} data-container={JSON.stringify(info.txt)} suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.txt.id} onClick={onElClick} className="txt">{cmp.info.txt.txt}</p>
//       {cmp.info.btn && <button style={info.btn.style} data-container={JSON.stringify(info.btn)} suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.btn.id} onClick={onElClick}>{cmp.info.btn.label}</button>}
//     </div>
//   )
// }
