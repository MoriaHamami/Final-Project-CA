import { useState } from "react"

export function EditorSideBar() {
  const [openMenu, setOpenMenu] = useState(false)


  return (
    <div className={openMenu ? 'editSideBar' : 'editSideBarClosed'}>
      {/* <h3>editor-sidebar</h3> */}
      <button onClick={() => { setOpenMenu(!openMenu) }}>{openMenu ? 'close' : 'open'}</button>
    </div>
  )
}
