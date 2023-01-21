import React from 'react'

import { useSelector } from 'react-redux'

export function WapHeader({ style, cmp, handleChooseContainer }) {
  
  const selectedElementId = useSelector((storestate) => storestate.wapModule.selectedElementId)
  const info = cmp.info

  return (
    <div id={cmp.type} data-container='parent' style={style} className={cmp.name} onClick={handleChooseContainer}>
      <p contentEditable={selectedElementId === info.logo.id} data-container={info.logo.id} className="logo" style={info.logo.style} onClick={handleChooseContainer}>{info.logo.txt}</p>
      {/* <span className="material-symbols-outlined menu-btn">menu</span> */}
      <nav className="nav-bar">
        {info.btns?.map((btn) => {
          return <a href={btn.link} key={btn.id}>{btn.label}</a>
        })}
      </nav>
</div>
)
}
