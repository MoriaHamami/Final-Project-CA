import { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { saveWap } from '../../store/wap.actions';
import { DynamicCmp } from '../wap-cmps/wap-dynamic-cmp';
// import { DynamicCmp } from '../../../cmps/wap-cmps/go/dynamic-cmp.jsx'



export function EditorBoard({ wap, setSelectedElementId, handleSelectCmpForEdit, onCmpClick, onElementTxtChange }) {

    const [elText, setElText] = useState('')

    function onElementClick({ target }) {

        console.log('target:', target)
        const elementId = target.getAttribute('data-container')
        onCmpClick()
        setSelectedElementId(elementId)
    }

    function onElementTxtChange(txt) {
        // setElText(txt)
    }

    function getElementTxt() {
        // return txt        
    }

    return (
        <>
            <Droppable droppableId="editor">
                {(provided, snapshot) => (
                    <div ref={provided.innerRef} className={`editor-board ${snapshot.isDraggingOver ? "drop-zone" : ""}`} style={{ top: '0 !important', left: '0 !important' }} >
                        {/* style={{ backgroundColor: snapshot.isDraggingOver ? "#DDDDDD" : "white" }} */}
                        {wap?.cmps?.map((cmp, index) => {
                            return <Draggable draggableId={cmp.id} key={cmp.id} index={index}  >
                                {(provided, snapshot) => (
                                    <div onMouseDown={() => handleSelectCmpForEdit(cmp.id)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <div className={`dragable-container ${(snapshot.isDragging && !snapshot.isDropAnimating) && 'dragging'}`}>
                                            <DynamicCmp cmp={cmp} onElementClick={onElementClick} getElementTxt={getElementTxt} />
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable >
        </>
    )
}