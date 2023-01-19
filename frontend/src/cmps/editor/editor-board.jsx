import { Draggable, Droppable } from 'react-beautiful-dnd';
import { DynamicCmp } from '../wap-cmps/dynamic-cmp';
// import { DynamicCmp } from '../../../cmps/wap-cmps/go/dynamic-cmp.jsx'



export function EditorBoard({ wap }) {

    // console.log(wap.cmps);


    return (
        <>

            <Droppable droppableId='editor'>
                {(provided, snapshot) => (
                    <div className='editor-board' ref={provided.innerRef} style={{ backgroundColor: snapshot.isDraggingOver ? 'lightblue' : 'white' }}>
                        {wap?.cmps?.map((cmp, index) => {
                            return <Draggable draggableId={cmp.id} key={cmp.id} index={index} >
                                {
                                    (provided, snapshot) => (
                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <DynamicCmp cmp={cmp} />
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
