
import { useSelector, useDispatch } from 'react-redux'

export function EditorBoard() {

    const wap = useSelector((storestate) => storestate.wapModule.wap)
    console.log('wap:',wap)

    return (
        <div>
            <h2>{wap.cmps[0].info.title}</h2>
        </div>
    )
}