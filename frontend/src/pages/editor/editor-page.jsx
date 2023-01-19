
import { EditorBoard } from './cmps/editor-board.jsx'
import { EditorSideBar } from './cmps/editor-sidebar.jsx'
import { useSelector } from 'react-redux'
import { getCmpById, wapTemplates } from '../../services/templates.service.local'
import { getWapById, updateWap } from '../../store/wap.actions.js'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { wapService } from '../../services/wap.service.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

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
            console.log('Had issues in template editor', err)
            navigate('/templates')
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
        wap.cmps.unshift(cmp)
        const newState = { ...wap }
        updateWap(newState)
    }

    function onPickedCmp({ target }) {
        const pickedCmpId = target.value
        let cmp = getCmpById(pickedCmpId)
        addCmpToBoard(cmp)
    }

    function removeCmpFromBoard(result) {
        const idx = result.source.index
        wap.cmps.splice(idx, 1)
        const newState = { ...wap }
        updateWap(newState)
    }

    return (
        <section>
            {wap && <div>
                <DragDropContext onDragEnd={onEnd}>
                    <Droppable droppableId='delete'>
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef}>
                                <FontAwesomeIcon className='footer-icon' icon={faTrashCan} />
                            </div>
                        )
                        }
                    </Droppable >
                    <section className='editor-page'>
                        <EditorSideBar onPickedCmp={onPickedCmp} />
                        {wap ? <EditorBoard wap={wap} /> : <p>Loading</p>}
                    </section>
                </DragDropContext>

            </div>}

        </section>
    )
}