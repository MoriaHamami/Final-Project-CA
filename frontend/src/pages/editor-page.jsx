
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
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [editType, setEditType] = useState('')



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
        const editedElement = wap.cmps[compIndex]
        if (selectedElementId !== 'parent') {
            for (const key in editedElement.info) {
                let childElement = editedElement.info[key]
                if (childElement.id === selectedElementId) {
                    const updatedElementStyle = { ...childElement.style, [propertyName]: propertyValue }
                    wap.cmps[compIndex].info[key].style = updatedElementStyle
                    break
                }else if(Array.isArray(childElement)) {
                    // console.log('here');
                    const idx = childElement.findIndex((elm) => elm.id === selectedElementId)
                    // console.log('childElement:',childElement)
                    if (idx !== -1){
                        const updatedElementStyle = { ...childElement[idx].style, [propertyName]: propertyValue }
                        wap.cmps[compIndex].info[key][idx].style = updatedElementStyle
                        break
                    }
                }
            }
        }
        else {
            const updatedCompStyle = { ...editedElement.style, [propertyName]: propertyValue }
            wap.cmps[compIndex].style = updatedCompStyle
        }
        saveWap(wap)
    }

    function onOptionClick(type) {
        if (!editType || editType != type) {
            if (!isOpenMenu) setIsOpenMenu(true)
            setEditType(type)

        } else {
            setIsOpenMenu(false)
            setEditType('')
        }
    }

    function onCmpClick() {
        setIsOpenMenu(true)
        setEditType('edit')
    }

    return (
        <div>
            {wap && <DragDropContext onDragEnd={onEnd}>
                <EditorHeader />

                <section className="editor-page">
                    <EditorSideBar
                        isOpenMenu={isOpenMenu}
                        editType={editType}
                        onPickedCmp={onPickedCmp}
                        onOptionClick={onOptionClick}
                        selectedElementId={selectedElementId}
                        chosenComponent={selectedCmpId}
                        handleWapEdit={handleWapEdit} />
                    {wap ? <EditorBoard
                        wap={wap}
                        onCmpClick={onCmpClick}
                        setSelectedElementId={setSelectedElementId}
                        handleSelectCmpForEdit={handleSelectCmpForEdit} /> : <p>Loading</p>}
                </section>

                {/* <Droppable droppableId="delete">
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef}>
                            <FontAwesomeIcon className="editor-delete-icon" icon={faTrashCan} />
                        </div>
                    )}
                </Droppable > */}

            </DragDropContext>}

        </div>

    )
}