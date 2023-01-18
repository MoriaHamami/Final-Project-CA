

import { DynamicCmp } from './dynamic-cmp/dynamic-cmp.jsx'

export function EditorBoard({wap}) {

    console.log(wap.cmps);


    return (
        <div className='editor-site'>
            {wap.cmps.map((cmp, idx) => {
                return <DynamicCmp cmp={cmp} />
            })}
        </div>
    )
}