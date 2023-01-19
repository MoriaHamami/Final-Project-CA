import { Draggable, Droppable } from 'react-beautiful-dnd';
import { DynamicCmp } from './dynamic-cmp/dynamic-cmp.jsx'



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


{/* <div style={{ backgroundColor: 'blue', height: '90px', transition: 'background 500ms' }}>shit</div> */ }
{/* <DragDropContext onDragEnd={onEnd}>
    <Droppable droppableId="123456">
        {(provided, snapshot) => (
            <div ref={provided.innerRef} style={{ backgroundColor: snapshot.isDraggingOver ? 'lightblue' : 'grey' }}
            >
                {list.map((item, index) => (
                    <Draggable draggableId={item.id} key={item.id} index={index}>
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <div style={{ backgroundColor: snapshot.isDragging ? 'white' : `${item.color}`, height: '90px', transition: 'background 500ms' }}>{item.name}</div>
                            </div>
                        )}
                    </Draggable>
                ))}
                {provided.placeholder}
            </div>
        )}

    </Droppable>
</DragDropContext>
  ); */}