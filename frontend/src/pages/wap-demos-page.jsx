
import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import { createWap, saveWap } from '../store/wap.actions.js'
import { WapDemoPreview } from '../cmps/waps/wap-demo-preview.jsx'
import { WapDemoList } from '../cmps/waps/wap-demo-list.jsx'

export function WapDemos() {
    // const dispatch = useDispatch()
    const navigate = useNavigate()

    // TODO USE QUERY IN ACTION , CALL ACTION
    // ADD TO STORE WAPS
    // function loadDemoWaps() {

    // }

    async function onSelectWapDemo(id) {
        try {
            const wapCopyId = await saveWap(id)
            // console.log('wapCopyId:', wapCopyId)
            navigate(`/editor/${wapCopyId}`)
        } catch (err) {
            console.log('Had issues in wap editor', err)
        }
    }

    return (
        <div className="wap-demos-page">
            <h2>Choose Your Template</h2>
            <WapDemoList onSelectDemoWap={onSelectWapDemo} />
        </div>
    )
}

