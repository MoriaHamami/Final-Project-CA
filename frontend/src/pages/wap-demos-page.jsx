
import { AppHeader } from '../cmps/app-header'
import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import { createWap, saveWap } from '../store/wap.actions.js'
// import { WapDemoPreview } from '../cmps/waps/wap-demo-preview.jsx'
import { WapDemoList } from '../cmps/wap-demos/wap-demo-list'
import { wapService } from '../services/wap.service.js'
import 'animate.css';

// import { getWapDemoById } from '../services/wap.service.local.js'

export function WapDemos() {
    // const dispatch = useDispatch()
    const navigate = useNavigate()

    // TODO USE QUERY IN ACTION , CALL ACTION
    // ADD TO STORE WAPS
    // function loadDemoWaps() {

    // }

    async function onSelectWapDemo(id) {
        try {
            let wap = wapService.getWapDemoById(id)
            const savedWapId = await saveWap(wap)
            // console.log('savedWapId:', savedWapId)
            navigate(`/editor/${savedWapId}`)
        } catch (err) {
            console.log('Had issues in wap editor', err)
        }
    }

    return (
        <div>
            <AppHeader />
        <div className="wap-demos-page">

            <h2 className='title animate__animated animate__slideInLeft'>Pick one of our professionally designed templates for your website</h2>
            <p className='subtitle animate__animated animate__slideInLeft'>Or express your inner creativity and start from scratch</p>
            <WapDemoList onSelectDemoWap={onSelectWapDemo} />
        </div>
        </div>
    )
}

