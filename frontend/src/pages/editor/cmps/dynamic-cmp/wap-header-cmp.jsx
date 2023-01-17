import React from 'react'
import { DynamicCmp } from './dynamic-cmp'

export function WapHeader({ style, cmp, onHoverCmp, onSelectCmp, selectedCmp, displayClass }) {
  return (
    <div  className={cmp.name}>
        <h2 className='logo'>{cmp.info.logo}</h2>
        <nav className='nav-bar'>
        {cmp?.info?.btns.map((btn) => {
        return <a href={btn.link}>{btn.label}</a>
      })}
      </nav>
    </div>
  )
}
