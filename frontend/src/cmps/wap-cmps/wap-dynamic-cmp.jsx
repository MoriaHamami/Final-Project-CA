
import { ContainerCmp } from './wap-container-cmp.jsx'
import { WapHeader } from './wap-header-cmp.jsx'
import { WapFooter } from './wap-footer-cmp.jsx'
import { WapHero } from './wap-hero-cmp.jsx'
import { WapPreview } from './wap-preview-cmp.jsx'

import { useEffect, useState } from 'react'
import { GalleryCmp } from './wap-gallery-cmp.jsx'
import { VideoCmp } from './wap-video-cmp.jsx'
import { FormCmp } from './wap-form-cmp.jsx'


export function DynamicCmp(props){
  const { cmp } = props

 

  // ADD WAP-(case) TO ALL THE SWITCH CASES

  switch (cmp?.type) {
    case 'wap-container':
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
    case 'wap-preview':
      return (
        <WapPreview
          {...props}
          style={cmp.style}
        />
      )
    case 'wap-gallery':
      return (
        <GalleryCmp
          cmp={cmp}
          style={cmp.style}
        />
      )
    case 'wap-video':
      return (
        <VideoCmp
          cmp={cmp}
          style={cmp.style}
        />
      )
    case 'wap-form':
      return (
        <FormCmp
          cmp={cmp}
          style={cmp.style}
        />
      )
    case 'wap-footer':
      return (
        <WapFooter
          {...props}
          style={cmp.style}
        />
      )
    default:
      return
  }
}
