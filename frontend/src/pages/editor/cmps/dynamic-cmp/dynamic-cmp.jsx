
import { ContainerCmp } from './container-cmp.jsx'
import { TxtCmp } from './txt-cmp.jsx'
import { BtnCmp } from './btn-cmp.jsx'
import { WapHeader } from './wap-header-cmp.jsx'
import { WapHero } from './wap-hero-cmp.jsx'

import { useEffect, useState } from 'react'


export const DynamicCmp = (props) => {
  const { cmp } = props

// ADD WAP-(case) TO ALL THE SWITCH CASES

  switch (cmp.type) {
    case 'container':
      return (
        <ContainerCmp
          {...props}
          style={cmp.style}
        />
      )
      case 'wap-header':
      return (
        <WapHeader
          {...props}
          style={cmp.style}
        />
      )
      case 'wap-hero':
        return (
          <WapHero
            {...props}
            style={cmp.style}
          />
        )
    case 'txt':
      return (
        <TxtCmp
          cmp={cmp}
        />
      )
    case 'btn':
      return (
        <BtnCmp
          cmp={cmp}
        />
      )
    default:
      return
  }
}
