import { Draggable, Droppable } from 'react-beautiful-dnd';
import { DynamicCmp } from '../wap-cmps/wap-dynamic-cmp';
// import { DynamicCmp } from '../../../cmps/wap-cmps/go/dynamic-cmp.jsx'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'




export function EditorBoard({ wap, handleSelectCmpForEdit, onElClick, onElementTxtChange, selectedCmpId }) {

  const { displaySize } = useSelector((storeState) => storeState.wapModule)
  const [displayClass, setDisplayClass] = useState('')
  

  useEffect(() => {
    switch (displaySize) {
      case '720px':
        setDisplayClass('tablet-layout')
        break
      case '420px':
        setDisplayClass('mobile-layout')
        break
      default:
        setDisplayClass('desktop-layout')
    }
  }, [displaySize])


    // function onElClick({ target }) {
    // console.log('target:', target)
    // const element =  JSON.parse(target.getAttribute('data-container'))
    // setSelectedElement(element)
    // onCmpClick()
    // }

  


    return (
        <>
            <Droppable droppableId="editor">
                {(provided, snapshot) => (
                    <div ref={provided.innerRef} className={`editor-board ${snapshot.isDraggingOver ? "drop-zone" : "" + displayClass}`} style={{ top: '0 !important', left: '0 !important' }} >
                        {/* style={{ backgroundColor: snapshot.isDraggingOver ? "#DDDDDD" : "white" }} */}
                        {wap?.cmps?.map((cmp, index) => {
                            return <Draggable draggableId={cmp.id} key={cmp.id} index={index}  >
                                {(provided, snapshot) => (
                                    <div onMouseDown={() => handleSelectCmpForEdit(cmp.id)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <div className={`dragable-container ${snapshot.isDragging ? 'dragging' : ''}`}>
                                            <DynamicCmp selectedCmpId={selectedCmpId} cmp={cmp} onElClick={onElClick} onElementTxtChange={onElementTxtChange} />
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