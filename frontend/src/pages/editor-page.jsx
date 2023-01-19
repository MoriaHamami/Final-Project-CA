
import { EditorBoard } from '../cmps/editor/editor-board.jsx'
import { EditorSideBar } from '../cmps/editor/editor-sidebar.jsx'
import { useSelector } from 'react-redux'
import { getCmpById, wapDemos } from '../services/wap.service.local'
import { addCmp, loadWap, removeCmp } from '../store/wap.actions.js'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { wapService } from '../services/wap.service.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { utilService } from '../services/util.service.js'

export function Editor() {
    const wap = useSelector((storestate) => storestate.wapModule.wap)
    const [isDragging, setIsDragging] = useState(false)

    // const [list, setList] = useState([])
    const navigate = useNavigate()
    const { wapId } = useParams()

    // useEffect(() => {
    //     try {
    //         loadWap(wapId)
    //     } catch (err) {
    //         console.log('Had issues in wap editor', err)
    //         navigate('/WapDemos')
    //     }
    // }, [])
    
    useEffect(() => {
        try {
            loadWap(wapId)
        } catch (err) {
            console.log('Had issues in wap editor', err)
            navigate('/WapDemos')
        }
        // console.log('wap heree:', wap)
        // setList(wap.cmps)
        // loadWap(wapId)
    }, [wap])

    const reOrder = (startIdx, endIdx) => { 
        // const [removed] = cmps.splice(startIdx, 1)
        // cmps.splice(endIdx, 0, removed)
        // const newState = { ...wap, cmps: cmps }
        removeCmp(wap, startIdx, endIdx)
    }

    const onEnd = (result) => {
        if (result.destination.droppableId === 'delete') {
            removeCmpFromBoard(result)
            return
        }

        setIsDragging(false);
        // setList(reOrder(list, result.source.index, result.destination.index))
        reOrder(result.source.index, result.destination.index)
    }

    function addCmpToBoard(cmp) {
        // console.log('cmp:', cmp)
        // // Change cmp id
        // cmp.id = utilService.makeId()
        // // Change id of each cmp in the current cmp 
        // wapService.changeCmpId(cmp)
        // // Add cmp to wap and save
        // wap.cmps.unshift(cmp)
        // const newState = { ...wap }
        addCmp(wap, cmp)
    }


    // TODO: ADD CMP TO WAP
    function onPickedCmp({ target }) {
        const pickedCmpName = target.value
        // let cmp = getCmpByName(pickedCmpName)
        // addCmpToBoard(cmp)
    }

    function removeCmpFromBoard(result) {
        const idx = result.source.index
        // wap.cmps.splice(idx, 1)
        removeCmp(wap, idx)
    }

    return (
           <div>
           {wap && <DragDropContext onDragEnd={onEnd}>
                    <Droppable droppableId="delete">
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef}>
                                <FontAwesomeIcon className="editor-delete-icon" icon={faTrashCan} />
                            </div>
                        )
                        }
                    </Droppable >
                    <section className="editor-page">
                        <EditorSideBar onPickedCmp={onPickedCmp} />
                        {wap ? <EditorBoard wap={wap} /> : <p>Loading</p>}
                    </section>
                </DragDropContext>}

            </div>

    )
}