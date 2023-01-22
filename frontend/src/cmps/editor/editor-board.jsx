import { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { saveWap } from '../../store/wap.actions';
import { DynamicCmp } from '../wap-cmps/wap-dynamic-cmp';
// import { DynamicCmp } from '../../../cmps/wap-cmps/go/dynamic-cmp.jsx'



export function EditorBoard({ wap, handleSelectCmpForEdit, onElClick, onElementTxtChange }) {

    const [elText, setElText] = useState('')

    // function onElClick({ target }) {
    // console.log('target:', target)
    // const element =  JSON.parse(target.getAttribute('data-container'))
    // setSelectedElement(element)
    // onCmpClick()
    // }

    function onElementTxtChange(txt) {
        // setElText(txt)
    }

    function getElementTxt(value) {
        console.log('value:', value)
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
                                        <div className={`dragable-container ${snapshot.isDragging ? 'dragging' : ''}`}>
                                            <DynamicCmp cmp={cmp} onElClick={onElClick} getElementTxt={getElementTxt} />
                                        </div>
                                        {provided.placeholder}
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