import React from 'react'



export function WapHeader({ style, cmp, handleChooseContainer }) {
  return (
    <div id={cmp.type} data-container='parentContainer' style={style} className={cmp.name} onClick={handleChooseContainer}>
      <p data-container='logoContainer' className="logo" style={cmp.info.logo.style} onClick={handleChooseContainer}>{cmp.info.logo.txt}</p>
      <span className="material-symbols-outlined menu-btn">menu</span>
      <nav className="nav-bar">
        {cmp.info.btns?.map((btn) => {
          return <a href={btn.link} key={btn.id}>{btn.label}</a>
        })}
      </nav>
</div>
)
}
