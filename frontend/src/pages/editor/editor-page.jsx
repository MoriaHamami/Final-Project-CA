
import { Link } from 'react-router-dom'
import { EditorBoard } from './cmps/editor-board.jsx'
import { EditorSideBar } from './cmps/editor-sidebar.jsx'

export function Editor() {

    return (
        <div>
            <section className='editor-page'>
                <EditorSideBar />
                <EditorBoard />
            </section>

        </div>
    )
}