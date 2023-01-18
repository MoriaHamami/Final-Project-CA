
import { Link } from 'react-router-dom'
import {EditorBoard} from './cmps/editor-board.jsx'

export function Editor() {

    return (
        <div>
            <section className='editor-page'>
            <EditorBoard/>
            {/* <EditorSideBar/> */}
            </section>
            
        </div>
    )
}