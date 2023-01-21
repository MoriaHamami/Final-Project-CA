import React from 'react'
import { DynamicCmp } from './wap-dynamic-cmp'

export function ContainerCmp({ style, cmp }) {
  
  return (
    <div id={cmp?.type} style={style} className={cmp.name}>
      {cmp?.info?.txt && <span className="container-txt">{cmp.info.txt}</span>}
      {cmp?.cmps?.map((cmp) => {
        return <DynamicCmp key={cmp?.id} cmp={cmp} />
      })}
    </div>
  )
}
