import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faReply, faDisplay, faTabletScreenButton, faMobileScreenButton, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { height } from '@mui/system';
import { saveWap } from '../../store/wap.actions';

export function EditorHeader({ wap }) {
    const [displayType, setDisplayType] = useState('desktop')
    const [name, setName] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const navigate = useNavigate()


    async function changeWapName() {
        try {
            const wapToPublish = { ...wap, name: name, isPublished: true }
            // delete wapToPublish._id
            await saveWap(wapToPublish)
            setIsVisible(prevState => !prevState)
            window.open(`/publish/${wapToPublish.name}`, '_blank')
        } catch (err) {
            console.log('Could not change wap name')
        }
    }


    return (
        <header className="editor-header">
            <div className='user-actions-container'>
                <div className="editor-actions">
                    {/* <FontAwesomeIcon className='editor-action' icon={faUserGroup} /> */}
                    <span className="material-symbols-outlined editor-action">undo</span>
                    <span className="material-symbols-outlined editor-action">redo</span>
                    {/* <FontAwesomeIcon className='editor-action' icon={faReply} />
                <FontAwesomeIcon className='editor-action' icon={faShare} /> */}
                </div>

                <span className='divider'>|</span>

                <div className='editor-size-container'>
                    <span onClick={() => setDisplayType('desktop')} className={`material-symbols-outlined editor-action desktop ${displayType === 'desktop' ? 'active' : ''} `}>desktop_windows</span>
                    <span onClick={() => setDisplayType('tablet')} className={`material-symbols-outlined editor-action ${displayType === 'tablet' ? 'active' : ''} `}>tablet_mac</span>
                    <span onClick={() => setDisplayType('phone')} className={`material-symbols-outlined editor-action ${displayType === 'phone' ? 'active' : ''} `}>phone_iphone</span>
                    {/* <FontAwesomeIcon className='editor-action' icon={faDisplay} />
                <FontAwesomeIcon className='editor-action' icon={faTabletScreenButton} />
                <FontAwesomeIcon className='editor-action' icon={faMobileScreenButton} /> */}
                </div>
            </div>
            <div className="site-actions">
                <Link key="/preview" to={`/ preview / ${wap._id} `}><button className='preview-btn'>Preview</button></Link>
                <button onClick={() => setIsVisible(!isVisible)} className='publish-btn'>Publish</button>
                {/* <Link key="/publish" to={`/ publish / ${ wap.name } `}><button className='publish-btn'>Publish</button></Link> */}
            </div>
            {/* <div style={{ backgroundcolor: 'red', height: '70px', width: '70px', visibility: isVisible ? 'visible' : 'hidden', zIndex: '1' }}>
                <input onChange={(e) => setName(e.target.value)} placeholder='Please enter website name:' type={'text'} required />
                <button onClick={changeWapName}>Save your website</button>
            </div> */}

        </header >
    )
}
