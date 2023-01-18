

import { DynamicCmp } from './dynamic-cmp/dynamic-cmp.jsx'

export function EditorBoard({wap}) {

   

    return (
        <div>
            {wap.cmps.map((cmp, idx) => {
                return <DynamicCmp cmp={cmp}/>
            })}
        </div>
    )
}