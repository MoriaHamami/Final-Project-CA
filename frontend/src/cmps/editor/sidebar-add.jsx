
import { getCmpsByCategory } from '../../services/wap.service.local'
import { useState, useEffect } from "react"


export function SidebarAdd({ onPickedCmp }) {

    const [cmps, setCmps] = useState(getCmpsByCategory('headers'))
    // setCmps(getCmpsByCategory('headers'))


    return <div>
        {/* {cmps.length && <select name="cars" id="cars" onChange={onPickedCmp}>
            <option value={cmps[0].id}>Header1</option>
            <option value={cmps[1].id}>Header2</option>
        </select>} */}
        {cmps.length && <div>
            <div onClick={() => onPickedCmp(cmps[0].id)}>HEADER 1</div>
            <div onClick={() => onPickedCmp(cmps[1].id)}>HEADER 2</div>
        </div>}
    </div>
}