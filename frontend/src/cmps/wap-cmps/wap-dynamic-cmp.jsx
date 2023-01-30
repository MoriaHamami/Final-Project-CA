
import { ContainerCmp } from './wap-container-cmp.jsx'
import { HeaderCmp } from './wap-header-cmp.jsx'
import { WapFooter } from './wap-footer-cmp.jsx'
import { HeroCmp } from './wap-hero-cmp.jsx'
import { AboutCmp } from './wap-about-cmp.jsx'

import { useEffect, useState } from 'react'
import { GalleryCmp } from './wap-gallery-cmp.jsx'
import { VideoCmp } from './wap-video-cmp.jsx'
import { FormCmp } from './wap-form-cmp.jsx'
import { MapCmp } from './wap-map-cmp.jsx'
import { useSelector } from 'react-redux'


export function DynamicCmp(props) {
  const { cmp } = props

  const displaySize = useSelector((storeState) => storeState.wapModule.displaySize)
  const [displayClass, setDisplayClass] = useState('')

  useEffect(() => {
    switch (displaySize) {
      case '720px':
        setDisplayClass('tablet-layout')
        break
      case '420px':
        setDisplayClass('mobile-layout')
        break
      default:
        setDisplayClass('desktop-layout')
    }
  }, [displaySize])

  // ADD WAP-(case) TO ALL THE SWITCH CASES

  switch (cmp?.type) {
    case 'wap-container':
      return (
        <ContainerCmp
          {...props}
          displayClass={displayClass}
          style={cmp.style}
        />
      )
    case 'wap-header':
      return (
        <HeaderCmp
          {...props}
          displayClass={displayClass}
          style={cmp.style}
        />
      )
    case 'wap-hero':
      return (
        <HeroCmp
          displayClass={displayClass}
          {...props}
          cmp={cmp}
          style={cmp.style}
        />
      )
    case 'wap-about':
      return (
        <AboutCmp
          {...props}
          cmp={cmp}
          displayClass={displayClass}
          style={cmp.style}
        />
      )
    case 'wap-gallery':
      return (
        <GalleryCmp
          {...props}
          displayClass={displayClass}
          cmp={cmp}
          style={cmp.style}
        />
      )
    case 'wap-video':
      return (
        <VideoCmp
          {...props}
          displayClass={displayClass}
          cmp={cmp}
          style={cmp.style}
          {...props}
        />
      )
    case 'wap-form':
      return (
        <FormCmp
          {...props}
          displayClass={displayClass}
          cmp={cmp}
          style={cmp.style}
        />
      )
    case 'wap-map':
      return (
        <MapCmp
          {...props}
          displayClass={displayClass}
          cmp={cmp}
          style={cmp.style}
        />
      )
    case 'wap-footer':
      return (
        <WapFooter
          {...props}
          displayClass={displayClass}
          style={cmp.style}
        />
      )
    default:
      return
  }
}

