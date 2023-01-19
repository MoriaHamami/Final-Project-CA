import React from 'react'

export function WapHero({ style, cmp }) {
  return (
    <div id={cmp.type} style={style} className={cmp.name}>
        <div>
            <p className="title">{cmp.info.title}</p>
            <h2 className="subtitle">{cmp.info.subtitle}</h2>
            <p className="txt">{cmp.info.txt}</p>
        </div>
        <nav>

         <button href={cmp.info.btn.link}>{cmp.info.btn.label}</button>
      </nav>
    </div>
  )
}
