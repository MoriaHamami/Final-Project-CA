import React from 'react'
import { DynamicCmp } from './dynamic-cmp'

export function WapHeader({ style, cmp, onHoverCmp, onSelectCmp, selectedCmp, displayClass }) {
  return (
    <div  className={cmp.name}>
        <div>{cmp.info.logo}</div>
        <nav>
        {cmp?.info?.btns.map((btn) => {
        return <a href={btn.link}>{btn.label}</a>
      })}
      </nav>
    </div>
  )
}
