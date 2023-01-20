import { Draggable, Droppable } from 'react-beautiful-dnd';
import { DynamicCmp } from '../wap-cmps/wap-dynamic-cmp';
// import { DynamicCmp } from '../../../cmps/wap-cmps/go/dynamic-cmp.jsx'



export function EditorBoard({ wap, setChosenContainer, handleSelectCmpForEdit }) {

    // console.log(wap.cmps);

    const handleChooseContainer = ({ target }) => {
        console.log('target:', target)

        const container = target.getAttribute('data-container')
        setChosenContainer(container)
    }


    return (
        <>

            <Droppable droppableId="editor">
                {(provided, snapshot) => (
                    <div ref={provided.innerRef} className={`editor-board ${snapshot.isDraggingOver ? "drop-zone" : ""}`} style={{top: '0 !important',left: '0 !important'}} >
                        {/* style={{ backgroundColor: snapshot.isDraggingOver ? "#DDDDDD" : "white" }} */}
                        {wap?.cmps?.map((cmp, index) => {
                            return <Draggable draggableId={cmp.id} key={cmp.id} index={index}  >
                                {
                                    (provided, snapshot) => (
                                        <div onMouseDown={() => handleSelectCmpForEdit(cmp.id)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            {/* <div> */}
                                            <DynamicCmp cmp={cmp} handleChooseContainer={handleChooseContainer} />
                                            {/* </div> */}
                                            {/* <div style={{transform: snapshot.isDragging? "scale(0.2)" : "scale(1)" }}> */}
                                            {/* </div> */}
                                        </div>
                                    )
                                }
                            </Draggable>
                        })}
                        {provided.placeholder}

                    </div>
                )
                }
            </Droppable >
        </>
    )
}