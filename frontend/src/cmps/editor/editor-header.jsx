import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faReply, faDisplay, faTabletScreenButton, faMobileScreenButton, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export function EditorHeader({wap}) {

    return (
        <header className="editor-header">
            <div className="editor-actions">
                {/* <FontAwesomeIcon className='editor-action' icon={faUserGroup} /> */}
                <span className="material-symbols-outlined editor-action">undo</span>
                <span className="material-symbols-outlined editor-action">redo</span>
                {/* <FontAwesomeIcon className='editor-action' icon={faReply} />
                <FontAwesomeIcon className='editor-action' icon={faShare} /> */}
            </div>
            <div className='editor-size-container'>
                <span className="material-symbols-outlined editor-action desktop">desktop_windows</span>
                <span className="material-symbols-outlined editor-action">tablet_mac</span>
                <span className="material-symbols-outlined editor-action">phone_iphone</span>
                {/* <FontAwesomeIcon className='editor-action' icon={faDisplay} />
                <FontAwesomeIcon className='editor-action' icon={faTabletScreenButton} />
                <FontAwesomeIcon className='editor-action' icon={faMobileScreenButton} /> */}
            </div>
            <div className="site-actions">
                <Link key="/preview" to={`/preview/${wap._id}`}><button className='preview-btn'>Preview</button></Link>
                <button className='publish-btn'>Publish</button>

            </div>
        </header >
    )
}
