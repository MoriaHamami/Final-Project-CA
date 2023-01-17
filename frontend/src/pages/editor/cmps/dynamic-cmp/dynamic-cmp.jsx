
import { ContainerCmp } from './container-cmp.jsx'

import { useEffect, useState } from 'react'


export const DynamicCmp = (props) => {
  const { cmp } = props


  switch (cmp.type) {
    case 'wap-header':
      return (
        <ContainerCmp
          {...props}
          style={cmp.style}
        />
      )
    case 'wap-main':
      return (
        <ContainerCmp
          {...props}
          style={cmp.style}
        />
      )
    default:
      return
  }
}
