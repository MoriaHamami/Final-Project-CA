import { Draggable, Droppable } from 'react-beautiful-dnd';
import { saveWap } from '../../store/wap.actions';
import { DynamicCmp } from '../wap-cmps/wap-dynamic-cmp';
// import { DynamicCmp } from '../../../cmps/wap-cmps/go/dynamic-cmp.jsx'



export function EditorBoard({ wap, setSelectedElementId, handleSelectCmpForEdit }) {

    // const wap = useSelector((storestate) => storestate.wapModule.wap)
    // console.log(wap.cmps);

    function onElementClick({target}) {
        // console.log('target:',target)
        const el = getElementByEv(ev)
        // console.log('el:', el)
        const elementId = target.getAttribute('data-container')
        setSelectedElementId(elementId)
        // document.addEventListener('mouseleave', onLeaveElement)
    }

    function onLeaveElement(ev) {
        // saveWap(wap)
        // dispatch(saveToHistory())
        console.log('ev:', ev)
        // if (txtRef.current && !txtRef.current.contains(ev.target)) {
        //   txtRef.current.blur()
        //   document.removeEventListener('mouseleave', handleClickOutside)
        //   if (cmp.info.txt === txtRef.current.innerText) return
        //   cmp.info.txt = txtRef.current.innerText
        //   dispatch(updateCmp(cmp))
        // }
    }

    return (
        <>

            <Droppable droppableId="editor">
                {(provided, snapshot) => (
                    <div ref={provided.innerRef} className={`editor-board ${snapshot.isDraggingOver ? "drop-zone" : ""}`} style={{ top: '0 !important', left: '0 !important' }} >
                        {/* style={{ backgroundColor: snapshot.isDraggingOver ? "#DDDDDD" : "white" }} */}
                        {wap?.cmps?.map((cmp, index) => {
                            return <Draggable draggableId={cmp.id} key={cmp.id} index={index}  >
                                {
                                    (provided, snapshot) => (
                                        <div onMouseDown={() => handleSelectCmpForEdit(cmp.id)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <DynamicCmp cmp={cmp} onElementClick={onElementClick} />
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