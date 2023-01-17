
import { useSelector, useDispatch } from 'react-redux'
import { DynamicCmp } from './dynamic-cmp/dynamic-cmp.jsx'

export function EditorBoard() {

    const wap = useSelector((storestate) => storestate.wapModule.wap)
    console.log('wap:',wap)

    return (
        <div>
            {wap.cmps.map((cmp, idx) => {
                return <DynamicCmp cmp={cmp}/>
            })}
        </div>
    )
}