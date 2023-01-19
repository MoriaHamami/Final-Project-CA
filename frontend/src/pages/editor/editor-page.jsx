
import { EditorBoard } from './cmps/editor-board.jsx'
import { EditorSideBar } from './cmps/editor-sidebar.jsx'
import { useSelector } from 'react-redux'
import { getCmpById, wapTemplates } from '../../services/templates.service.local'
import { getWapById, updateWap } from '../../store/wap.actions.js'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { wapService } from '../../services/wap.service.js'
import { utilService } from '../../services/util.service.js'

export function Editor() {
    const wap = useSelector((storestate) => storestate.wapModule.wap)
    const [isDragging, setIsDragging] = useState(false)
    // console.log('wap:', wap.cmps)

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
        console.log('wap.cmps:', wap.cmps)
        setList(wap.cmps)
    }, [wap])

    const reOrder = (list, startIndex, endIndex) => {
        // console.log('hey');
        const result = list
        // console.log('list', list);
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)
        const newState = { ...wap, cmps: result }
        updateWap(newState)
        return result
    }

    const onEnd = (result) => {
        if (result.destination.droppableId === 'delete') {
            console.log('deleting ', result.source)
            // handleDelete
            return
        }

        setIsDragging(false);
        setList(reOrder(list, result.source.index, result.destination.index))
    }

    function addCmpToBoard(cmp) {
        // Change cmp id
        cmp.id = utilService.makeId()
        // Change id of each cmp in the current cmp 
        wapService.changeCmpId(cmp)
        // Add cmp to wap and save
        wap.cmps.unshift(cmp)
        const newState = { ...wap }
        updateWap(newState)
    }

    function onPickedCmp({ target }) {
        const pickedCmpId = target.value
        let cmp = getCmpById(pickedCmpId)
        addCmpToBoard(cmp)
    }

    return (
        <section>
            {wap && <div>
                <DragDropContext onDragEnd={onEnd}>
                    <Droppable droppableId='delete'>
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef} >
                                <div>DELETE PAH</div>
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