import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SidebarEdit } from './sidebar-edit.jsx'
import { SidebarAdd } from './sidebar-add.jsx'
import { faAdd, faPencil } from '@fortawesome/free-solid-svg-icons'
import 'animate.css';
import { wapHero2 } from "../../waps/heros/wap-hero-2";
import { Droppable } from "react-beautiful-dnd"

export function EditorSideBar({ onPickedCmp, selectedElementId, handleWapEdit, chosenComponent, onOptionClick, isOpenMenu, editType }) {






  return (

    <div className={`editor-side-bar ${isOpenMenu ? 'open' : ''}`}>
      <div className={`editor-options ${isOpenMenu ? 'open' : ''}`}>
        <div className={`option-container ${editType === 'edit' ? 'active' : ''}`} onClick={() => onOptionClick('edit')}>
          <FontAwesomeIcon className="edit-btn" icon={faPencil} />
          <span className="option-name">Edit</span>
        </div>

        <div className={`option-container ${editType === 'add' ? 'active' : ''}`} onClick={() => onOptionClick('add')}>
          <FontAwesomeIcon className="add-btn" icon={faAdd} />
          <span className="option-name">Add</span>
        </div>
      </div>

      <div className={`editor-tools ${isOpenMenu ? 'open' : ''}`}>
        {editType === 'edit' && <SidebarEdit selectedElementId={selectedElementId} handleWapEdit={handleWapEdit} chosenComponent={chosenComponent} />}

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