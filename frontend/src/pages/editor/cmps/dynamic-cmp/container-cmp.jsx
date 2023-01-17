import React from 'react'
import { DynamicCmp } from './dynamic-cmp'

export function ContainerCmp({ style, cmp, onHoverCmp, onSelectCmp, selectedCmp, displayClass }) {
  return (
    <div style={style}>
        {cmp?.cmps?.map((cmp) => {
        return <DynamicCmp key={cmp.id} cmp={cmp} />
      })}
    </div>
  )
}
