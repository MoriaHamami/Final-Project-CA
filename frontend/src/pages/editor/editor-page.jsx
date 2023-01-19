
import { EditorBoard } from './cmps/editor-board.jsx'
import { EditorSideBar } from './cmps/editor-sidebar.jsx'
import { useSelector } from 'react-redux'
import { getCmpById, wapTemplates } from '../../services/templates.service.local'
import { getWapById as getWapById, updateWap } from '../../store/wap.actions.js'
import { DragDropContext } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { wapService } from '../../services/wap.service.js'

export function Editor() {
    const wap = useSelector((storestate) => storestate.wapModule.wap)
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
    // console.log(wap)
    return (
        <section>
            {wap && <div>
                <div>
                    <label htmlFor="cmps">Cmps : </label>
                    <select name="cars" id="cars" onChange={onPickedCmp}>
                        <option value={'wc12'}>Header</option>
                        <option value={'wc13'}>Hero</option>
                        <option value={'wc14'}>Preview</option>
                        <option value={'wc10a'}>Cards</option>
                        <option value={'wc10b'}>Form</option>
                        <option value={'wc17'}>Footer</option>
                    </select>
                </div>
                <section className='editor-page'>
                    <DragDropContext onDragEnd={onEnd}>
                        <EditorSideBar />
                        {wap ? <EditorBoard wap={wap} /> : <p>Loading</p>}
                    </DragDropContext>
                </section>
            </div>}

        </section>
    )
}