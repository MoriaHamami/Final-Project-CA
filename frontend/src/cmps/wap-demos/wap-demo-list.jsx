import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { wapService } from "../../services/wap.service"
import { loadWaps } from "../../store/wap.actions"
import { WapDemoPreview } from "./wap-demo-preview"

export function WapDemoList({ onSelectDemoWap }) {
    const waps = useSelector((storeState) => storeState.wapModule.waps)
    // getWapDemos()
    // const [wapDemos, setWapDemos] = useState(null)
    
    useEffect(()=> {
        // console.log('waps:', waps)
        loadWaps({isDemo: true})
    }, [])
    // useEffect(()=> {
    //     console.log('waps:', waps)
    //     const wapDemos = waps.map(wap => wap.isDemo)
    //     setWapDemos(wapDemos)
    // }, [])

    // async function getWapDemos() {
    //     try{
    //         const filterBy = {isDemo:true}
    //         const wapDemos = await wapService.query(filterBy)
    //         console.log('wapDemos:', wapDemos)
    //         return wapDemos
    //     }catch(err){
    //         console.dir(err)
    //     }
    //     // console.log('waps:', wapDemos)
    // }

    // console.log('wapService:', wapService.query(filterBy))
    return <div className="preview-list">
        {waps.map((demoWap) => {
        // {getWapDemos().map((demoWap) => {
        // {wapService.query(filterBy).map((demoWap) => {
            return <WapDemoPreview key={demoWap._id} demoWap={demoWap} onSelectDemoWap={onSelectDemoWap} />
        })}
    </div>
}