import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SidebarEdit } from './sidebar-edit.jsx'
import { SidebarAdd } from './sidebar-add.jsx'
import { faAdd, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import 'animate.css';
import { wapHero2 } from "../../waps/heros/wap-hero-2";
import { Droppable } from "react-beautiful-dnd"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function EditorSideBar({ onPickedCmp, handleWapEdit, chosenComponent, onOptionClick, isOpenMenu, editType }) {

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
        </div>

        <div className='option-container delete' onClick={() => onOptionClick('add')}>
          <Droppable droppableId="delete">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} className="delete-container">
                <span className="material-symbols-outlined editor-delete-icon">delete</span>
                <span className="option-name">Delete</span>
                {/* <FontAwesomeIcon className="editor-delete-icon" icon={faTrashCan} /> */}
              </div>
            )}
          </Droppable >
        </div>
      </div>

      <div className={`editor-tools ${isOpenMenu ? 'open' : ''}`}>

        {editType === 'add' && <Droppable droppableId="from-sidebar-add">
          {(provided, snapshot) => (
            // <div ref={provided.innerRef}>
            <SidebarAdd innerRef={provided.innerRef} onPickedCmp={onPickedCmp} />
            // </div>
          )}
        </Droppable>}

        {editType === 'edit' && <SidebarEdit handleWapEdit={handleWapEdit} chosenComponent={chosenComponent} />}

      </div>
    </div>

  )
}