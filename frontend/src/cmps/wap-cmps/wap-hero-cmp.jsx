import React from 'react'

export function WapHero({ style, cmp, handleChooseContainer }) {
  return (
    <div id={cmp.type} style={style} className={cmp.name} data-container='parent' onClick={handleChooseContainer}>
        {/* <div>
            <p style={cmp.info.title.style} className="title" data-container='title' onClick={handleChooseContainer}>{cmp.info.title.txt}</p> 
            <p style={cmp.info.txt.style} className="txt" data-container='txt' onClick={handleChooseContainer}>{cmp.info.txt.txt}</p>
        </div>
        <nav>

         <button href={cmp.info.btn.link}>{cmp.info.btn.label}</button>
      </nav> */}
    </div>
  )
}
