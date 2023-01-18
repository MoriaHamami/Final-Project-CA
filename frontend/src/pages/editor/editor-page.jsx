
import { Link } from 'react-router-dom'
import { EditorBoard } from './cmps/editor-board.jsx'
import { EditorSideBar } from './cmps/editor-sidebar.jsx'
import { useSelector } from 'react-redux'
import { getCmpById, wapTemplates } from '../../services/templates.service.local'
import { updateWap } from '../../store/wap.actions.js'


export function Editor() {
    const wap = useSelector((storestate) => storestate.wapModule.wap)
    console.log('wap:',wap)

    function addCmpToBoard(cmp) {
        wap.cmps.unshift(cmp)
        const newState ={...wap , cmps : wap.cmps } 
        console.log('newState:',newState)
        updateWap(newState)

    }


    function onPickedCmp({target}) {
        const pickedCmpId = target.value
        // console.log('pickedCmp:',pickedCmp)
        let cmp = getCmpById(pickedCmpId)
        console.log('cmp:', cmp)
        addCmpToBoard(cmp)

    }

    return (
        <div>
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
                <EditorSideBar />
                {wap ? <EditorBoard wap={wap} /> : <p>Loading</p>}
            </section>

        </div>
    )
}