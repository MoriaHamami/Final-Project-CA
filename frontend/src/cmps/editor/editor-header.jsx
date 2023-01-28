import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faReply, faDisplay, faTabletScreenButton, faMobileScreenButton, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { height } from '@mui/system';
import { setDisplaySize, updateWap } from '../../store/wap.actions';
import { useDispatch, useSelector } from 'react-redux';

export function EditorHeader({ wap }) {
    // const [displayType, setDisplayType] = useState('desktop')
    const [name, setName] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const navigate = useNavigate()
    const { displaySize, user } = useSelector((storeState) => ({ displaySize: storeState.wapModule.displaySize, user: storeState.userModule.user }))

    // const dispatch = useDispatch()

    function onSetDisplaySize(size) {
        setDisplaySize(size)
        // dispatch(setDisplaySize(size))
    }

    const onPublishClick = () => {
        if (!user) {
            return alert('Please login to publish your site')
        }
        setIsVisible(!isVisible)
    }

    async function changeWapName() {
        try {
            const wapToPublish = { ...wap, name: name, isPublished: true }
            // delete wapToPublish._id
            await updateWap(wapToPublish)
            // await saveWap(wapToPublish)
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
                    <span onClick={() => onSetDisplaySize('100%')} className={`material-symbols-outlined editor-action desktop ${displaySize === '100%' ? 'active' : ''} `}>desktop_windows</span>
                    <span onClick={() => onSetDisplaySize('720px')} className={`material-symbols-outlined editor-action ${displaySize === '720px' ? 'active' : ''} `}>tablet_mac</span>
                    <span onClick={() => onSetDisplaySize('420px')} className={`material-symbols-outlined editor-action ${displaySize === '420px' ? 'active' : ''} `}>phone_iphone</span>
                    {/* <FontAwesomeIcon className='editor-action' icon={faDisplay} />
                <FontAwesomeIcon className='editor-action' icon={faTabletScreenButton} />
                <FontAwesomeIcon className='editor-action' icon={faMobileScreenButton} /> */}
                </div>
            </div>
            <div className='publish-container' style={{ display: isVisible ? 'block' : 'none' }}>
                <input onChange={(e) => setName(e.target.value)} placeholder='Please enter website name:' type={'text'} required />
                <button onClick={changeWapName} className='publish-btn'>Save</button>
            </div>
            <div className="site-actions">
                <Link key="/preview" to={`/preview/${wap._id}`}><button className='preview-btn'>Preview</button></Link>
                <button onClick={onPublishClick} className='publish-btn'>Publish</button>
            </div>

        </header >
    )
}
