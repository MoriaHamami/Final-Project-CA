import { useState } from "react"

export function EditorSideBar({ onPickedCmp }) {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className={openMenu ? 'editSideBar' : 'editSideBarClosed'}>

      <div className="side-bar-editor"></div>

      <div>
        <label htmlFor="cmps">Cmps : </label>
        <select onChange={onPickedCmp}>
          <option value={"wap-header"}>Header</option>
          <option value={"wap-hero"}>Hero</option>
          <option value={"wap-preview"}>Preview</option>
          <option value={"wap-cards"}>Cards</option>
          <option value={"wap-form"}>Form</option>
          <option value={"wap-footer"}>Footer</option>
        </select>
      </div>


      <button onClick={() => { setOpenMenu(!openMenu) }}>{openMenu ? 'close' : 'open'}</button>
    </div>
  )
}
