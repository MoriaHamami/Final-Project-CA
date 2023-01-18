import React from 'react'
import { DynamicCmp } from './dynamic-cmp'

export function ContainerCmp({ style, cmp }) {
  return (
    <div id={cmp?.id} style={style} className={cmp.name}>
      {cmp?.info?.txt && <span>{cmp.info.txt}</span>}
      {cmp?.cmps?.map((cmp) => {
        return <DynamicCmp key={cmp?.id} cmp={cmp} />
      })}
    </div>
  )
}
