
import { EditorBoard } from '../cmps/editor/editor-board.jsx'
import { EditorSideBar } from '../cmps/editor/editor-sidebar.jsx'
import { EditorHeader } from '../cmps/editor/editor-header.jsx'
import { useSelector } from 'react-redux'

import { addCmp, loadWap, removeCmp, saveWap } from '../store/wap.actions.js'
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
    const [chosenContainer, setChosenContainer] = useState();
    const [chosenCmp, setChosenCmp] = useState();

    const navigate = useNavigate()
    const { wapId } = useParams()
    // console.log('wap:', wap)

    useEffect(() => {
        try {
            loadWap(wapId)
        } catch (err) {
            console.log('Had issues in wap editor', err)
            navigate('/WapDemos')
        }
    }, [])

    const reOrder = (startIdx, endIdx) => {
        removeCmp(wap, startIdx, endIdx)
    }

    const onEnd = (result) => {
        if (result.source.droppableId === 'from-sidebar-add') {
            const idx = result.source.index
            const cmpsByCurrType = wapService.getCmpsByCategory('headers')
            // console.log('cmpsByCurrType:', cmpsByCurrType)
            const currCmp = cmpsByCurrType[idx]
            return addCmpToBoard(currCmp)
        }
        if (result.destination.droppableId === 'delete') return removeCmpFromBoard(result)

        // setIsDragging(false)
        reOrder(result.source.index, result.destination.index)
    }

    function addCmpToBoard(cmp) {
        addCmp(wap, cmp)
    }

    // TODO: ADD CMP TO WAP
    function onPickedCmp(cmpId) {
        let cmp = wapService.getCmpById(cmpId)
        addCmpToBoard(cmp)
    }

    function removeCmpFromBoard(result) {
        const idx = result.source.index
        removeCmp(wap, idx)
    }

    function handleSelectCmpForEdit(cmpId) {
        setChosenCmp(cmpId)
    }

    function handleWapEdit(propertyName, propertyValue) {
        const compIndex = wap.cmps.findIndex(cmp => cmp.id === chosenCmp)
        const editedCmp = wap.cmps[compIndex]
        console.log('chosenContainer:', chosenContainer)
        const updatedCompStyle = editedCmp.style[chosenContainer] = { ...editedCmp.style[chosenContainer], [propertyName]: propertyValue }
        wap.cmps[compIndex].style[chosenContainer] = updatedCompStyle
        saveWap(wap)

        // update state (dispatch)
        // save to localstorage


    }

    return (
        <div>
            {wap && <DragDropContext onDragEnd={onEnd}>
                <EditorHeader />

                <section className="editor-page">
                    <EditorSideBar onPickedCmp={onPickedCmp} chosenContainer={chosenContainer} chosenComponent={chosenCmp} handleWapEdit={handleWapEdit} />
                    {wap ? <EditorBoard wap={wap} setChosenContainer={setChosenContainer} handleSelectCmpForEdit={handleSelectCmpForEdit} /> : <p>Loading</p>}
                </section>

                <Droppable droppableId="delete">
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef}>
                            <FontAwesomeIcon className="editor-delete-icon" icon={faTrashCan} />
                        </div>
                    )}
                </Droppable >

            </DragDropContext>}

        </div>

    )
}