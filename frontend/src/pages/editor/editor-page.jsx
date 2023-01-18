
import { Link } from 'react-router-dom'
import {EditorBoard} from './cmps/editor-board.jsx'

export function Editor() {

    return (
        <div>
            <h2>Editor Page!</h2>
            <section className='editor-page'>
            <EditorBoard/>
            {/* <EditorSideBar/> */}
            </section>
            
        </div>
    )
}