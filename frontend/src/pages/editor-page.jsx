import { AppHeader } from '../cmps/app-header'
import { EditorBoard } from '../cmps/editor/editor-board.jsx'
import { EditorSideBar } from '../cmps/editor/editor-sidebar.jsx'
import { EditorHeader } from '../cmps/editor/editor-header.jsx'
import { useSelector } from 'react-redux'

import { addCmp, loadWap, removeCmp, saveElement, saveWap, setSelectedCmpId, setSelectedElement } from '../store/wap.actions.js'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { wapService } from '../services/wap.service.js'
import { utilService } from '../services/util.service.js'



export function Editor() {
    const wap = useSelector((storestate) => storestate.wapModule.wap)
    const selectedCmpId = useSelector((storestate) => storestate.wapModule.selectedCmpId)
    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [editOpt, setEditOpt] = useState('')
    const [isHoverTrash, setisHoverTrash] = useState(false)


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
        setIsDragging(false)
        if (result.source.droppableId === 'from-sidebar-add' && result.destination.droppableId === 'editor') {
            // const idx = result.source.index
            // const cmpsByCurrType = wapService.getCmpsByCategory('headers')
            console.log('rsult===', result)
            const currCmp = JSON.parse(result.draggableId)
            // const currCmp = cmpsByCurrType[idx]
            const destIdx = result.destination.index
            return addCmpToBoard(currCmp, destIdx)
        }
        if (result.destination.droppableId === 'delete') return removeCmpFromBoard(result)
        reOrder(result.source.index, result.destination.index)
    }

    function addCmpToBoard(cmp, idx) {
        addCmp(wap, cmp, idx)
    }

    // TODO: REMOVE LATER MAYBE FROM EVERUYWHERE
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
        saveElement(wap, selectedCmpId, selectedElement, propertyName, propertyValue)
    }



    function onElementTxtChange(txt) {
        console.log('txt:', txt)
        const wapCopy = structuredClone(wap)
        const cmpIndex = wapCopy.cmps.findIndex(cmp => cmp.id === selectedCmpId)
        const editedElement = wapCopy.cmps[cmpIndex]

        // Check if the edited element is a cmp or an element
        if (!selectedElement.theme) {
            for (const key in editedElement.info) {
                let childElement = editedElement.info[key]
                // Check if the id of the edited element is found inside another element
                if (childElement.id === selectedElement.id) {
                    const updatedElementTxt = { ...childElement, txt }
                    wapCopy.cmps[cmpIndex].info[key] = updatedElementTxt
                    break
                } else if (childElement.length) {
                    const idx = childElement.findIndex((elm) => elm.id === selectedElement.id)
                    if (idx !== -1) {
                        const updatedElementTxt = { ...childElement[idx], txt }
                        wapCopy.cmps[cmpIndex].info[key][idx] = updatedElementTxt
                        break
                    }
                }
            }
        } else {
            const updatedCmpStyle = { ...editedElement, txt }
            wapCopy.cmps[cmpIndex] = updatedCmpStyle
        }

        // LATER CHANGE TO: saveWap(wapCopy) (doesnt work with editable for now because of refresh) - FIND SOLUTION
        wapService.save(wapCopy)
    }


    function onOptionClick(type) {
        if (!editOpt || editOpt !== type) {
            if (!isOpenMenu) setIsOpenMenu(true)
            setEditOpt(type)
        } else {
            setIsOpenMenu(false)
            setEditOpt('')
        }
    }

    function onStartDragging() {
        setIsDragging(true)
    }


    function onElClick(ev) {
        ev.stopPropagation()
        const { target } = ev
        setIsOpenMenu(true)
        setEditOpt('edit')
        const element = JSON.parse(target.getAttribute('data-container'))
        setSelectedElement(element)
        if (element.type === 'btn') ev.preventDefault()
        // console.log('element:', element)
    }


    return (
        <div>
            <AppHeader />
            {wap && <DragDropContext onDragEnd={onEnd} onDragStart={onStartDragging}>

                <EditorHeader wap={wap} />

                <section className="editor-page">
                    <EditorSideBar
                        isOpenMenu={isOpenMenu}
                        editType={editOpt}
                        onPickedCmp={onPickedCmp}
                        onOptionClick={onOptionClick}
                        isDragging={isDragging}
                        chosenComponent={selectedCmpId}
                        handleWapEdit={handleWapEdit} />
                    {wap ? <EditorBoard
                        wap={wap}
                        onElClick={onElClick}
                        setSelectedElement={setSelectedElement}
                        onElementTxtChange={onElementTxtChange}
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