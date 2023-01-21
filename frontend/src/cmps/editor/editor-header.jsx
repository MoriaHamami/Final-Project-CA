import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faReply, faDisplay, faTabletScreenButton, faMobileScreenButton, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export function EditorHeader() {

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
                <button className='preview-btn'>PREVIEW</button>
                <button className='publish-btn'>PUBLISH</button>

            </div>
        </header >
    )
}
