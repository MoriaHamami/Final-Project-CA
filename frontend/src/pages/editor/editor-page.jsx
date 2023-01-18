
import { Link } from 'react-router-dom'
import {EditorBoard} from './cmps/editor-board.jsx'
import { useSelector, useDispatch } from 'react-redux'

export function Editor() {
    const wap = useSelector((storestate) => storestate.wapModule.wap)
       console.log('wap:',wap)

    function addCmpToBoard(pickedCmp){

    }

    return (
        <div>
            <section className='editor-page'>
            <EditorBoard wap = {wap}/>
            {/* <EditorSideBar/> */}
            </section>
            
        </div>
    )
}