
import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'



export function SidebarFontDecoration({title,  onChange}) {
  const [isBold, setIsBold] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isItalic, setIsItalic] = useState(false)

  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)

  useEffect(() => {
    const fontWeight = selectedElement.style['font-weight']
    if(fontWeight && fontWeight > '600') setIsBold(true)
    else setIsBold(false)
    const fontItalic = selectedElement.style['font-style']
    if(fontItalic && fontItalic === 'italic') setIsItalic(true)
    else setIsItalic(false)
    const textDec = selectedElement.style['text-decoration']
    if(textDec && textDec === 'underline') setIsUnderline(true)
    else setIsUnderline(false)
  }, [selectedElement])


    function onBoldClick(){
        const value = isBold ? '400' : '700'
        setIsBold((prevState) => !prevState)
        onChange('font-weight', value)
    }

    function onUnderlineClick(){
        const value = isUnderline ? 'none' : 'underline'
        setIsUnderline((prevState) => !prevState)
        onChange('text-decoration', value)
    }

    function onItalicClick(){
        const value = isItalic ? '' : 'italic'
        setIsItalic((prevState) => !prevState)
        onChange('font-style', value)
    }

        return <div className='flex space-between'>
          <span>{title}</span>
          <div className="editor-decoration-container">
          <span onClick={onBoldClick} className={`material-symbols-outlined bold ${isBold ? 'active' : ''}`}>format_bold</span>
          <span onClick={onUnderlineClick} className={`material-symbols-outlined ${isUnderline ? 'active' : ''}`}>format_underlined</span>
          <span onClick={onItalicClick} className={`material-symbols-outlined ${isItalic ? 'active' : ''}`}>format_italic</span>

          </div>
        </div>
    }