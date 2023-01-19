import { useState } from "react"

export function EditorSideBar() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className={openMenu ? 'editSideBar' : 'editSideBarClosed'}>
      <button onClick={() => { setOpenMenu(!openMenu) }}>{openMenu ? 'close' : 'open'}</button>
    </div>
  )
}
