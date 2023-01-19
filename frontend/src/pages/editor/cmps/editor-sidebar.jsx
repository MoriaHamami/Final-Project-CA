import { useState } from "react"

export function EditorSideBar({onPickedCmp}) {
  const [openMenu, setOpenMenu] = useState(false)

  


  return (
    // <div className={openMenu ? 'editSideBar' : 'editSideBarClosed'}>
    <div className={'editSideBar'}>

      <div>
        <label htmlFor="cmps">Cmps : </label>
        <select name="cmps" id="cmps" onChange={onPickedCmp}>
          <option value={'wc12'}>Header</option>
          <option value={'wc13'}>Hero</option>
          <option value={'wc14'}>Preview</option>
          <option value={'wc10a'}>Cards</option>
          <option value={'wc10b'}>Form</option>
          <option value={'wc17'}>Footer</option>
        </select>
      </div>
      {/* <h3>editor-sidebar</h3> */}
      <button onClick={() => { setOpenMenu(!openMenu) }}>{openMenu ? 'close' : 'open'}</button>
    </div>
  )
}
