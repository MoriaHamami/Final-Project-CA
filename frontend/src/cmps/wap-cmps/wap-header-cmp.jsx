import React from 'react'

export function WapHeader({ style, cmp }) {
  return (
    <div id={cmp.type} style={style} className={cmp.name}>
        <p className="logo">{cmp.info.logo}</p>
        <nav className="nav-bar">
        {cmp.info.btns?.map((btn) => {
          return <a href={btn.link} key={btn.id}>{btn.label}</a>
        })}
      </nav>
    </div>
  )
}
