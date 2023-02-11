
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { DynamicCmp } from './wap-dynamic-cmp'

export function ContainerCmp({ style, cmp, selectedCmpId, onElClick, displayClass }) {

  const [isOn, setIsOn] = useState({ cmp: false})


  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
  // const info = cmp.info

  return (
    // <div id={cmp?.type} style={style} className={cmp.name}
    <div id={cmp.type} data-container={JSON.stringify(cmp)} style={style} onClick={onElClick}
      className={((selectedCmpId === cmp.id && selectedElement?.id === cmp.id) ? 'selected' : '') + ' ' + cmp.name + ' ' + displayClass + ' ' + (selectedElement?.id !== cmp.id && isOn.cmp && 'hover-cmp')}
      onMouseOut={() => setIsOn((prevIsOn) => {
        return { ...prevIsOn, cmp: false }
      })}
      onMouseOver={() => setIsOn((prevIsOn) => {
        return { ...prevIsOn, cmp: true }
      })}>
      {/* {cmp?.info?.txt && <span className="container-txt">{cmp.info.txt}</span>} */}
      {cmp?.cmps?.map((cmp) => {
        return <DynamicCmp key={cmp?.id} cmp={cmp} />
      })}
    </div>
  )
}
