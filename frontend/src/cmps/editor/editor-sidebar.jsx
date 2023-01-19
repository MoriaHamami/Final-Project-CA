import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintbrush, faPencil, faDisplay, faTabletScreenButton, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import 'animate.css';

export function EditorSideBar({ onPickedCmp }) {
  const [openMenu, setOpenMenu] = useState(false)

  return (

    <div className={`editor-side-bar ${openMenu ? 'open' : ''}`}>


      <div className={`editor-options ${openMenu ? 'open' : ''}`}>
        <div className="editor-option">
        <FontAwesomeIcon className="edit-btn" icon={faPencil} onClick={() => { setOpenMenu(!openMenu) }}/>
        <span className="option-name">Edit</span> 
        </div>
      </div>

      <div className={`editor-tools ${openMenu ? 'open' : ''}`}>
        <div>
          {/* <label htmlFor="cmps">Cmps : </label> */}
          <select name="cars" id="cars" onChange={onPickedCmp}>
            <option value={"wc12"}>Header</option>
            <option value={"wc13"}>Hero</option>
            <option value={"wc14"}>Preview</option>
            <option value={"wc10a"}>Cards</option>
            <option value={"wc10b"}>Form</option>
            <option value={"wc17"}>Footer</option>
          </select>
        </div>

      </div>

    </div>

  )
}