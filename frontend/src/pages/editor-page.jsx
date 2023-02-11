import { AppHeader } from '../cmps/app-header'
import { EditorBoard } from '../cmps/editor/editor-board.jsx'
import { EditorSideBar } from '../cmps/editor/editor-sidebar.jsx'
import { EditorHeader } from '../cmps/editor/editor-header.jsx'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addCmp, loadWap, removeCmp, saveCmp, saveElement, setSelectedCmpId, setSelectedElement, updateWap } from '../store/wap.actions.js'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { wapService } from '../services/wap.service.js'
// import { socketService } from '../services/socket.service'
import { Loader } from './loader'
import { socketService, SOCKET_EVENT_SEND_WAP } from '../services/socket.service'



export function Editor() {
    const { wap, isCollabMode } = useSelector((storestate) => storestate.wapModule)
    const selectedCmpId = useSelector((storestate) => storestate.wapModule.selectedCmpId)
    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [editOpt, setEditOpt] = useState('')
    const [isDragging, setIsDragging] = useState(false)
    const navigate = useNavigate()
    const { wapId } = useParams()

    useEffect(() => {
        // socketService.on(SOCKET_EVENT_SEND_WAP, (res) => {
        //     console.log('from editor socket',res._id===wap._id)
        //    if(res._id===wap._id) updateWap(res)
        // })
        try {
            loadWap(wapId)
        } catch (err) {
            console.log('Had issues in wap editor', err)
            navigate('/WapDemos')
        }

    }, [])



    useEffect(() => {

    }, [])



    const reOrder = (startIdx, endIdx) => {
        removeCmp(wap, startIdx, endIdx)
    }
    // const showAddCmpMessage = () => {
    //     toast.success('Section added', {
    //         position: toast.POSITION.BOTTOM_RIGHT
    //     })
    // }
    const showCmpDelete = () => {
        toast.success('Section deleted', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }


    const onEnd = (result) => {
        setIsDragging(false)
        if (result.source.droppableId === 'from-sidebar-add' && result.destination.droppableId === 'editor') {
            const currCmp = JSON.parse(result.draggableId)
            const destIdx = result.destination.index
            // showAddCmpMessage()
            return addCmpToBoard(currCmp, destIdx)
        }
        if (result.destination.droppableId === 'delete') {
            const approved = window.confirm('Are you sure you want to remove this element?')
            if (!approved) {
                return
            }
            showCmpDelete()
            return removeCmpFromBoard(result)
        }
        reOrder(result.source.index, result.destination.index)
    }

    function addCmpToBoard(cmp, idx) {
        console.log('wap:', wap)
        saveCmp(wap, cmp, idx)
    }

    // TO CHECKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
    function setElementStyle(wap, cmpId, element, propertyName, propertyValue) {
        if (propertyName === 'url') {
            if (propertyValue.includes('//www.youtube.com')) {
                const idx = propertyValue.indexOf('?v=') + 3
                const newPropertyValue = 'https://www.youtube.com/embed/' + propertyValue.slice(-(propertyValue.length - idx))
                // console.log('propertyValue:', newPropertyValue)
                element[propertyName] = newPropertyValue
            } else element[propertyName] = propertyValue
        } else if (propertyName === 'cords') element[propertyName] = propertyValue
        else element.style[propertyName] = propertyValue
        // console.log('element editorpage line 69:', element)
        // console.log('element.style[propertyName]:', element.style[propertyName])
        // console.log('element:', element)
        // console.log('wap:', wap)
        saveElement(wap, cmpId, element)
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

    // TO CHANGEEEEEEEEEEEEEEEEEEEE
    function handleWapEdit(propertyName, propertyValue) {
        setElementStyle(wap, selectedCmpId, selectedElement, propertyName, propertyValue)
        // saveElement(wap, selectedCmpId, selectedElement, propertyName, propertyValue)
    }


    // function setElementTxt(txt) {
    //     selectedElement.txt = txt
    //     saveElement(wap, selectedCmpId, selectedElement)
    // }


    // FUNCTION TO CHANGE FOR ALL EDIT SAVE OPTIONS!!
    function onElementTxtChange(txt) {
        // console.log('txt:', txt)
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
        if (element?.type === 'btn' || element?.type === 'map' || element?.type === 'video') ev.preventDefault()
        // console.log('element:', element)
    }

    if (!wap) return <Loader />


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
                        selectedCmpId={selectedCmpId}
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
            <ToastContainer autoClose={2000} />



        </div>

    )
}