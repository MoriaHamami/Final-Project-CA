
import { EditorBoard } from '../cmps/editor/editor-board.jsx'
import { EditorSideBar } from '../cmps/editor/editor-sidebar.jsx'
import { EditorHeader } from '../cmps/editor/editor-header.jsx'
import { useSelector } from 'react-redux'

import { addCmp, loadWap, removeCmp, saveWap, setSelectedCmpId, setSelectedElementId } from '../store/wap.actions.js'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { wapService } from '../services/wap.service.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { utilService } from '../services/util.service.js'

export function Editor() {
    const wap = useSelector((storestate) => storestate.wapModule.wap)
    const selectedCmpId = useSelector((storestate) => storestate.wapModule.selectedCmpId)
    const selectedElementId = useSelector((storestate) => storestate.wapModule.selectedElementId)


    // const [selectedElementId, setSelectedElementId] = useState();

    // const [selectedCmpId, setSelectedCmpId] = useState();
    const [isDragging, setIsDragging] = useState(false)
    const navigate = useNavigate()
    const { wapId } = useParams()

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
            const currCmp = cmpsByCurrType[idx]
            return addCmpToBoard(currCmp)
        }
        if (result.destination.droppableId === 'delete') return removeCmpFromBoard(result)

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
        setSelectedCmpId(cmpId)
    }

    function handleWapEdit(propertyName, propertyValue) {
        const compIndex = wap.cmps.findIndex(cmp => cmp.id === selectedCmpId)
        const editedCmp = wap.cmps[compIndex]
        if (selectedElementId !== 'parent') {
            //    const childCmp = editedCmp.info[selectedElementId]
            //    console.log('childCmp:',childCmp)
            //    const updatedCompStyle = {...childCmp.style, [propertyName]: propertyValue}
            //     wap.cmps[compIndex].info[selectedElementId].style = updatedCompStyle
            for (const key in editedCmp.info) {
                if (editedCmp.info[key].id === selectedElementId) {
                    const childCmp = editedCmp.info[key]
                    const updatedCmpStyle = { ...childCmp.style, [propertyName]: propertyValue }
                    wap.cmps[compIndex].info[key].style = updatedCmpStyle

                }
            }
        }
        else {
            const updatedCompStyle = { ...editedCmp.style, [propertyName]: propertyValue }
            wap.cmps[compIndex].style = updatedCompStyle
        }
        saveWap(wap)
    }

    return (
        <div>
            {wap && <DragDropContext onDragEnd={onEnd}>
                <EditorHeader />

                <section className="editor-page">
                    <EditorSideBar onPickedCmp={onPickedCmp} selectedElementId={selectedElementId} chosenComponent={selectedCmpId} handleWapEdit={handleWapEdit} />
                    {wap ? <EditorBoard wap={wap} setSelectedElementId={setSelectedElementId} handleSelectCmpForEdit={handleSelectCmpForEdit} /> : <p>Loading</p>}
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