
import { AppHeader } from '../cmps/app-header'
import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import { addWap, createWap } from '../store/wap.actions.js'
// import { WapDemoPreview } from '../cmps/waps/wap-demo-preview.jsx'
import { WapDemoList } from '../cmps/wap-demos/wap-demo-list'
import { wapService } from '../services/wap.service.js'
import 'animate.css';
import { Loader } from './loader'
import { useSelector } from "react-redux"

// import { getWapDemoById } from '../services/wap.service.local.js'

export function WapDemos() {
    // const dispatch = useDispatch()
    const navigate = useNavigate()
    const waps = useSelector((storeState) => storeState.wapModule.waps)

    // TODO USE QUERY IN ACTION , CALL ACTION
    // ADD TO STORE WAPS
    // function loadDemoWaps() {

    // }

    async function onSelectDemoWap(id) {
        try {
            let wap = await wapService.getWapById(id)
            // let wap = wapService.getWapDemoById(id)
            // const savedWapId = await saveWap(wap)

            const savedWapId = await addWap(wap)
            navigate(`/editor/${savedWapId}`)
        } catch (err) {
            console.log('Had issues in wap editor', err)
        }
    }


    if (!waps) return <Loader />

    return (
        <div>
            <AppHeader />
            <div className="wap-demos-page">
                <div className="wap-demos-container">

                    <h2 className='title animate__animated animate__slideInLeft'>Pick one of our professionally designed templates for your website</h2>
                    <p className='subtitle animate__animated animate__slideInLeft'>Or express your inner creativity and start from scratch</p>
                    <WapDemoList onSelectDemoWap={onSelectDemoWap} waps={waps} />
                </div>
            </div>
        </div>
    )
}

