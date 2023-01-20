
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBold, faUnderline, faItalic } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"


export function SidebarFontDecoration({title,  onChange}) {
  const [isBold, setIsBold] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isItalic, setIsItalic] = useState(false)


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

        return <div>
          <span>{title}</span>
          <div className="editor-decoration--container">
          <FontAwesomeIcon className="bold-btn" icon={faBold} onClick={onBoldClick} />
          <FontAwesomeIcon className="underline-btn" icon={faUnderline} onClick={onUnderlineClick} />
          <FontAwesomeIcon className="italic-btn" icon={faItalic} onClick={onItalicClick} />

          </div>
        </div>
        // value={chosenContainer.style}
    }