
import { ContainerCmp } from './container-cmp.jsx'
import { TxtCmp } from './txt-cmp.jsx'
import { BtnCmp } from './btn-cmp.jsx'

import { useEffect, useState } from 'react'


export const DynamicCmp = (props) => {
  const { cmp } = props
  console.log('cmp:',cmp)
  console.log('props:',props)


  switch (cmp.type) {
    case 'container':
      return (
        <ContainerCmp
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
