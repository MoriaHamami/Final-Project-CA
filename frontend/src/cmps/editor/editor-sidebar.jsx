import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SidebarEdit } from './sidebar-edit.jsx'
import { SidebarAdd } from './sidebar-add.jsx'
import { faAdd, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import 'animate.css';
import { wapHero2 } from "../../waps/heros/wap-hero-2";
import { Droppable } from "react-beautiful-dnd"
import { SidebarTheme } from "./sidebar-theme.jsx"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function EditorSideBar({ onPickedCmp, handleWapEdit, chosenComponent, onOptionClick, isOpenMenu, editType, isDragging, }) {
  return (

    <div className={`editor-side-bar ${isOpenMenu ? 'open' : ''}`}>
      <div className={`editor-options ${isOpenMenu ? 'open' : ''}`}>
        <div className="edit-add-container">

          <div className={`option-container ${editType === 'add' ? 'active' : ''}`} onClick={() => onOptionClick('add')}>
            {/* <FontAwesomeIcon className="add-btn" icon={faAdd} /> */}
            <span className="material-symbols-outlined">add_box</span>
            <span className="option-name">Add</span>
          </div>

          <div className={`option-container ${editType === 'edit' ? 'active' : ''}`} onClick={() => onOptionClick('edit')}>
            <span className="material-symbols-outlined">draw</span>
            {/* <FontAwesomeIcon className="edit-btn" icon={faPencil} /> */}
            <span className="option-name">Edit</span>
          </div>

          <div className={`option-container ${editType === 'theme' ? 'active' : ''}`} onClick={() => onOptionClick('theme')}>
            <span class="material-symbols-outlined">palette</span>
            {/* <FontAwesomeIcon className="edit-btn" icon={faPencil} /> */}
            <span className="option-name">Theme</span>
          </div>
        </div>


        <div className='option-container delete' onClick={() => onOptionClick('add')}>
          <Droppable droppableId="delete">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} className="delete-container">
                <span className={`material-symbols-outlined  ${isDragging ? "editor-delete-icon" : "editor-delete-icon-hidden"}`}>delete</span>
                {/* {provided.placeholder} */}
              </div>
            )}
          </Droppable >
        </div>
      </div >

      <div className={`editor-tools ${isOpenMenu ? 'open' : ''}`}>

        {editType === 'add' && <Droppable droppableId="from-sidebar-add">
          {(provided, snapshot) => (
            <div className="dorppable-container" ref={provided.innerRef}>
              <SidebarAdd innerRef={provided.innerRef} onPickedCmp={onPickedCmp} />
              {/* {provided.placeholder} */}
            </div>
          )}
        </Droppable>}

        {editType === 'edit' && <SidebarEdit handleWapEdit={handleWapEdit} chosenComponent={chosenComponent} />}

        {editType === 'theme' && <SidebarTheme />}
        {/* {editType === 'theme' && <SidebarTheme handleWapEdit={handleWapEdit} />} */}

      </div>
    </div >

  )
}