

import { DynamicCmp } from './dynamic-cmp/dynamic-cmp.jsx'

export function EditorBoard({wap}) {

    const wap = useSelector((storestate) => storestate.wapModule.wap)
    console.log('wap:', wap)

    return (
        <div className='editor-site'>
            {wap.cmps.map((cmp, idx) => {
                return <DynamicCmp cmp={cmp} />
            })}
        </div>
    )
}