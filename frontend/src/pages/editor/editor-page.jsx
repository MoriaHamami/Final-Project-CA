
import { Link } from 'react-router-dom'
import { EditorBoard } from './cmps/editor-board.jsx'
import { EditorSideBar } from './cmps/editor-sidebar.jsx'

export function Editor() {
    const wap = useSelector((storestate) => storestate.wapModule.wap)
       console.log('wap:',wap)

    function addCmpToBoard(pickedCmp){

    }

    return (
        <div>
            <section className='editor-page'>
                <EditorSideBar />
                <EditorBoard />
            </section>

        </div>
    )
}