import { Draggable, Droppable } from 'react-beautiful-dnd';
import { DynamicCmp } from '../wap-cmps/wap-dynamic-cmp';
// import { DynamicCmp } from '../../../cmps/wap-cmps/go/dynamic-cmp.jsx'



export function EditorBoard({ wap, setChosenContainer, handleSelectCmpForEdit }) {

    // console.log(wap.cmps);

    const handleChooseContainer = ({ target }) => {
        const container = target.getAttribute('data-container')
        setChosenContainer(container)
    }


    return (
        <>

            <Droppable droppableId="editor">
                {(provided, snapshot) => (
                    <div className={`editor-board ${snapshot.isDraggingOver ? "drop-zone" : ""}`} ref={provided.innerRef}>
                        {/* style={{ backgroundColor: snapshot.isDraggingOver ? "#DDDDDD" : "white" }} */}
                        {wap?.cmps?.map((cmp, index) => {
                            return <Draggable draggableId={cmp.id} key={cmp.id} index={index}  >
                                {
                                    (provided, snapshot) => (
                                        <div onMouseDown={() => handleSelectCmpForEdit(cmp.id)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <DynamicCmp cmp={cmp} handleChooseContainer={handleChooseContainer} />
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