
import { ContainerCmp } from './wap-container-cmp.jsx'
import { HeaderCmp } from './wap-header-cmp.jsx'
import { WapFooter } from './wap-footer-cmp.jsx'
import { HeroCmp } from './wap-hero-cmp.jsx'
import { WapPreview } from './wap-preview-cmp.jsx'
import { AboutCmp} from './wap-about-cmp.jsx'

import { useEffect, useState } from 'react'
import { GalleryCmp } from './wap-gallery-cmp.jsx'
import { VideoCmp } from './wap-video-cmp.jsx'
import { FormCmp } from './wap-form-cmp.jsx'
import { MapCmp } from './wap-map-cmp.jsx'


export function DynamicCmp(props) {
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
        <HeaderCmp
          {...props}
          style={cmp.style}
        />
      )
    case 'wap-hero':
      return (
        <HeroCmp
          {...props}
          style={cmp.style}
        />
      )
    case 'wap-about':
      return (
        <AboutCmp
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
        {...props}
          cmp={cmp}
          style={cmp.style}
        />
      )
    case 'wap-video':
      return (
        <VideoCmp
          cmp={cmp}
          style={cmp.style}
          {...props}
        />
      )
    case 'wap-form':
      return (
        <FormCmp
        {...props}
          cmp={cmp}
          style={cmp.style}
        />
      )
    case 'wap-map':
      return (
        <MapCmp
        {...props}
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
