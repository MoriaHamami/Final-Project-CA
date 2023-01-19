import { useState } from "react"
import 'animate.css';

export function EditorSideBar({ onPickedCmp }) {
  const [openMenu, setOpenMenu] = useState(false)

  return (

    <div className={`editor-side-bar ${openMenu ? 'open' : ''}`}>


      <div className={`editor-options ${openMenu ? 'open' : ''}`}>
        <button onClick={() => { setOpenMenu(!openMenu) }}>{openMenu ? 'close' : 'open'}</button>
      </div>

      <div className={`editor-tools ${openMenu ? 'open' : ''}`}>
        <div>
          {/* <label htmlFor="cmps">Cmps : </label> */}
          <select name="cars" id="cars" onChange={onPickedCmp}>
            <option value={'wc12'}>Header</option>
            <option value={'wc13'}>Hero</option>
            <option value={'wc14'}>Preview</option>
            <option value={'wc10a'}>Cards</option>
            <option value={'wc10b'}>Form</option>
            <option value={'wc17'}>Footer</option>
          </select>
        </div>

      </div>

    </div>

  )}