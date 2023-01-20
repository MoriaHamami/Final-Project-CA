import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SidebarEdit } from './sidebar-edit.jsx'
import { SidebarAdd } from './sidebar-add.jsx'
import { faAdd, faPencil } from '@fortawesome/free-solid-svg-icons'
import 'animate.css';
import { wapHero2 } from "../../waps/heros/wap-hero-2";
import { Droppable } from "react-beautiful-dnd"

export function EditorSideBar({ onPickedCmp, chosenContainer, handleWapEdit, chosenComponent }) {
  const [openMenu, setOpenMenu] = useState(false)
  const [editType, setEditType] = useState('')

  function onOptionClick(type) {
    setOpenMenu(!openMenu)
    setEditType(type)
  }



  return (

    <div className={`editor-side-bar ${openMenu ? 'open' : ''}`}>
      <div className={`editor-options ${openMenu ? 'open' : ''}`}>
        <div className="option-container" onClick={() => onOptionClick('edit')}>
          <FontAwesomeIcon className="edit-btn" icon={faPencil} />
          <span className="option-name">Edit</span>
        </div>

        <div className="option-container" onClick={() => onOptionClick('add')}>
          <FontAwesomeIcon className="add-btn" icon={faAdd} />
          <span className="option-name">Add</span>
        </div>
      </div>

      <div className={`editor-tools ${openMenu ? 'open' : ''}`}>
        {editType === 'edit' && <SidebarEdit chosenContainer={chosenContainer} handleWapEdit={handleWapEdit} chosenComponent={chosenComponent} />}

        <Droppable droppableId="from-sidebar-add">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              {editType === 'add' && <SidebarAdd onPickedCmp={onPickedCmp} />}
            </div>
          )}
        </Droppable>

      </div>
    </div>

  )
}