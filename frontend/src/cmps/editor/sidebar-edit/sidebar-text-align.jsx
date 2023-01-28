
import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'



export function SidebarTextAlign({title,  onChange}) {
  const [alignValue, setAlignValue] = useState('')
  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)

  useEffect(() => {
    const textAlign = selectedElement.style['text-align']
    if(textAlign) setAlignValue(textAlign)
  }, [selectedElement])


    function onAlignClick(value){
        setAlignValue(value)
        onChange('text-align', value)
    }


        return <div className='flex space-between align-center'>
          <span>{title}</span>
          <div className="editor-decoration-container">
          <span onClick={() => onAlignClick('left')} className={`material-symbols-outlined ${alignValue === 'left' ? 'active' : ''}`}>format_align_left</span>
          <span onClick={() => onAlignClick('center')} className={`material-symbols-outlined ${alignValue === 'center' ? 'active' : ''}`}>format_align_center</span>
          <span onClick={() => onAlignClick('right')} className={`material-symbols-outlined ${alignValue === 'right' ? 'active' : ''}`}>format_align_right</span>

          </div>
        </div>
    }