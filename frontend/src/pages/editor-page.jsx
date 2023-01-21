
import { EditorBoard } from '../cmps/editor/editor-board.jsx'
import { EditorSideBar } from '../cmps/editor/editor-sidebar.jsx'
import { EditorHeader } from '../cmps/editor/editor-header.jsx'
import { useSelector } from 'react-redux'

import { addCmp, loadWap, removeCmp, saveWap, setSelectedCmpId, setSelectedElement } from '../store/wap.actions.js'
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
    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [editOpt, setEditOpt] = useState('')



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

    // function handleWapEdit(propertyName, propertyValue) {
    //     selectedElement.style = { ...selectedElement.style, [propertyName]: propertyValue }
    //     console.log('selectedElement:', selectedElement)
    //     saveWap(wap)
    // }

    // function handleWapEdit(propertyName, propertyValue) {

    //     // Find the current edited cmp
    //     const elIdx = wap.cmps.findIndex(cmp => cmp.id === selectedCmpId)
    //     const editedEl = wap.cmps[elIdx]

    //     // Check if the edited element is a cmp or elemnt
    //     if (selectedElement !== 'parent') {
    //         for (const key in editedEl.info) {
    //             let childElement = editedEl.info[key]
    //             if (childElement.id === selectedElement) {
    //                 // Check if the element found is instead an array of elemnts
    //                 if (Array.isArray(childElement)) {
    //                     const idx = childElement.findIndex((el) => el.id === selectedElement)
    //                     if (idx !== -1) {
    //                         const updatedElementStyle = { ...childElement[idx].style, [propertyName]: propertyValue }
    //                         wap.cmps[elIdx].info[key][idx].style = updatedElementStyle
    //                         break
    //                     }
    //                 } else {
    //                     const updatedElementStyle = { ...childElement.style, [propertyName]: propertyValue }
    //                     wap.cmps[elIdx].info[key].style = updatedElementStyle
    //                     break
    //                 }
    //             }
    //         }
    //     } else {
    //         const updatedCompStyle = { ...editedEl.style, [propertyName]: propertyValue }
    //         wap.cmps[elIdx].style = updatedCompStyle
    //     }

    //     saveWap(wap)
    // }

    function handleWapEdit(propertyName, propertyValue) {

        // Find the current edited cmp
        const cmpIndex = wap.cmps.findIndex(cmp => cmp.id === selectedCmpId)
        const editedElement = wap.cmps[cmpIndex]

        // Check if the edited element is a cmp or an elemnt
        if (!selectedElement.theme) {
            for (const key in editedElement.info) {
                let childElement = editedElement.info[key]
                // Check if the id of the edited element is found inside another elemnt
                if (childElement.id === selectedElement.id) {
                    const updatedElementStyle = { ...childElement.style, [propertyName]: propertyValue }
                    wap.cmps[cmpIndex].info[key].style = updatedElementStyle
                    break
                } else if (Array.isArray(childElement)) {
                    const idx = childElement.findIndex((elm) => elm.id === selectedElement.id)
                    if (idx !== -1) {
                        const updatedElementStyle = { ...childElement[idx].style, [propertyName]: propertyValue }
                        wap.cmps[cmpIndex].info[key][idx].style = updatedElementStyle
                        break
                    }
                }
            }
        } else {
            const updatedCmpStyle = { ...editedElement.style, [propertyName]: propertyValue }
            wap.cmps[cmpIndex].style = updatedCmpStyle
        }

        saveWap(wap)
    }

    function onOptionClick(type) {
        if (!editOpt || editOpt != type) {
            if (!isOpenMenu) setIsOpenMenu(true)
            setEditOpt(type)

        } else {
            setIsOpenMenu(false)
            setEditOpt('')
        }
    }

    function onElClick({ target }) {
        console.log('target:', target)
        setIsOpenMenu(true)
        setEditOpt('edit')
        const element = JSON.parse(target.getAttribute('data-container'))
        console.log('element:', element)
        setSelectedElement(element)
    }

    return (
        <div>
            {wap && <DragDropContext onDragEnd={onEnd}>

                <EditorHeader />

                <section className="editor-page">
                    <EditorSideBar
                        isOpenMenu={isOpenMenu}
                        editType={editOpt}
                        onPickedCmp={onPickedCmp}
                        onOptionClick={onOptionClick}
                        selectedElement={selectedElement}
                        chosenComponent={selectedCmpId}
                        handleWapEdit={handleWapEdit} />
                    {wap ? <EditorBoard
                        wap={wap}
                        onElClick={onElClick}
                        setSelectedElement={setSelectedElement}
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