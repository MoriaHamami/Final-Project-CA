
import { EditorBoard } from './cmps/editor-board.jsx'
import { EditorSideBar } from './cmps/editor-sidebar.jsx'
import { useSelector } from 'react-redux'
import { getCmpById, wapTemplates } from '../../services/templates.service.local'
import { updateWap } from '../../store/wap.actions.js'
import { DragDropContext } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react';

export function Editor() {
    const wap = useSelector((storestate) => storestate.wapModule.wap)
    // console.log('wap:', wap.cmps)

    const [list, setList] = useState([])

    useEffect(() => {
        console.log('wap.cmps:', wap.cmps)
        setList(wap.cmps)
    }, [wap])

    const reOrder = (list, startIndex, endIndex) => {
        // console.log('hey');
        const result = list
        console.log('list', list);
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)
        const newState = { ...wap, cmps: result }
        updateWap(newState)
        return result
    }


    const onEnd = (result) => {
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
    return (
        <div>
            {wap && <section className='editor-page'>
                <DragDropContext onDragEnd={onEnd}>
                    <EditorSideBar onPickedCmp={onPickedCmp} />
                    {wap ? <EditorBoard wap={wap} /> : <p>Loading</p>}
                </DragDropContext>
            </section>}
        </div>
    )
}