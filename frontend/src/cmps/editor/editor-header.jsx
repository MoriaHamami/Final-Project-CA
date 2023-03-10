import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faReply, faDisplay, faTabletScreenButton, faMobileScreenButton, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { height } from '@mui/system';
import { setDisplaySize, updateWap } from '../../store/wap.actions';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { PublishModal } from '../publish-modal'
// import { Loader } from './loader'

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

    const showInvalidPublish = () => {
        toast.warning('Please login to publish  !', {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }

    const onPublishClick = () => {
        if (!user) {
            return showInvalidPublish()
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
            window.open(`/${wapToPublish.name}`, '_blank')
        } catch (err) {
            console.log('Could not change wap name')
        }
    }


    return (
        <header className="editor-header">
            <div className='user-actions-container'>

                {/* <div className="editor-actions">
                    <span className="material-symbols-outlined editor-action">undo</span>
                    <span className="material-symbols-outlined editor-action">redo</span>
                </div> */}

                {/* <span className='divider'>|</span> */}

                <div className='editor-size-container'>
                    <span onClick={() => onSetDisplaySize('100%')} className={`material-symbols-outlined editor-action desktop ${displaySize === '100%' ? 'active' : ''} `}>desktop_windows</span>
                    <span onClick={() => onSetDisplaySize('720px')} className={`material-symbols-outlined editor-action ${displaySize === '720px' ? 'active' : ''} `}>tablet_mac</span>
                    <span onClick={() => onSetDisplaySize('420px')} className={`material-symbols-outlined editor-action ${displaySize === '420px' ? 'active' : ''} `}>phone_iphone</span>
                    {/* <FontAwesomeIcon className='editor-action' icon={faDisplay} />
                <FontAwesomeIcon className='editor-action' icon={faTabletScreenButton} />
            <FontAwesomeIcon className='editor-action' icon={faMobileScreenButton} /> */}
                </div>
            </div>
            {/* <span class="saving-loader">Saving</span> */}
            <ToastContainer autoClose={2000} />

            {/* <div className='publish-container' style={{ display: isVisible ? 'block' : 'none' }}>
                <input onChange={(e) => setName(e.target.value)} placeholder='Please enter website name:' type={'text'} required />
                <button onClick={changeWapName} className='publish-btn'>Save</button>
            </div> */}


            <div className="site-actions">
                <Link key="/preview" to={`/preview/${wap._id}`}><button className='preview-btn'>Preview</button></Link>
                <div className="editor-modal">
                    <PublishModal currWap={wap} />
                </div>
                {/* <button onClick={onPublishClick} className='publish-btn'>Publish</button> */}
            </div>
        </header >
    )
}
