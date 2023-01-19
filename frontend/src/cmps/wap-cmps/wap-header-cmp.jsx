import React from 'react'
import { DynamicCmp } from './dynamic-cmp'

export function WapHeader({ style, cmp }) {
  return (
    <div id={cmp.type} style={style} className={cmp.name}>
        <h2 className="logo">{cmp.info.logo}</h2>
        <nav className="nav-bar">
        {cmp?.info.btns.map((btn) => {
          return <a href={btn.link} key={btn.id}>{btn.label}</a>
        })}
      </nav>
    </div>
  )
}
