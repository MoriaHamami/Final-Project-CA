
import { EditorBoard } from './editor/editor-board.jsx'
import { EditorSideBar } from './editor/editor-sidebar.jsx'
import { useSelector } from 'react-redux'
import { getCmpById, wapDemos } from '../services/wap.service.local'
import { getCmpByName, getWapById, updateWap } from '../store/wap.actions.js'
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

    const [list, setList] = useState([])
    const navigate = useNavigate()
    const { wapId } = useParams()

    useEffect(() => {
        try {
            getWapById(wapId)
        } catch (err) {
            console.log('Had issues in wap editor', err)
            navigate('/WapDemos')
        }
    }, [])

    useEffect(() => {
        setList(wap.cmps)
    }, [wap])

    const reOrder = (list, startIndex, endIndex) => {
        const result = list
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)
        const newState = { ...wap, cmps: result }
        updateWap(newState)
        return result
    }

    const onEnd = (result) => {
        if (result.destination.droppableId === 'delete') {
            removeCmpFromBoard(result)
            return
        }

        setIsDragging(false);
        setList(reOrder(list, result.source.index, result.destination.index))
    }

    function addCmpToBoard(cmp) {
        console.log('cmp:', cmp)
        // Change cmp id
        cmp.id = utilService.makeId()
        // Change id of each cmp in the current cmp 
        wapService.changeCmpId(cmp)
        // Add cmp to wap and save
        wap.cmps.unshift(cmp)
        const newState = { ...wap }
        updateWap(newState)
    }


    // TODO: ADD CMP TO WAP
    function onPickedCmp({ target }) {
        const pickedCmpName = target.value
        let cmp = getCmpByName(pickedCmpName)
        addCmpToBoard(cmp)
    }

    function removeCmpFromBoard(result) {
        const idx = result.source.index
        wap.cmps.splice(idx, 1)
        const newState = { ...wap }
        updateWap(newState)
    }

    return (
           <div>
           {wap && <DragDropContext onDragEnd={onEnd}>
                    <Droppable droppableId='delete'>
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef}>
                                <FontAwesomeIcon className='editor-delete-icon' icon={faTrashCan} />
                            </div>
                        )
                        }
                    </Droppable >
                    <section className='editor-page'>
                        <EditorSideBar onPickedCmp={onPickedCmp} />
                        {wap ? <EditorBoard wap={wap} /> : <p>Loading</p>}
                    </section>
                </DragDropContext>}

            </div>

    )
}