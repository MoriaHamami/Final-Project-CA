
// import { getCmpsByCategory } from '../../services/wap.service.local'
import { useState, useEffect } from "react"
import { Draggable } from "react-beautiful-dnd"
import { wapService } from "../../services/wap.service"


export function SidebarAdd({ onPickedCmp }) {

    const [cmps, setCmps] = useState(wapService.getCmpsByCategory('headers'))
    // setCmps(getCmpsByCategory('headers'))


    return <div>
        {/* {cmps.length && <select name="cars" id="cars" onChange={onPickedCmp}>
            <option value={cmps[0].id}>Header1</option>
            <option value={cmps[1].id}>Header2</option>
        </select>} */}


        {cmps.length && <div>
            <Draggable draggableId={cmps[0].id} key={cmps[0].id} index={0} >
                {
                    (provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            {/* <DynamicCmp cmp={cmp} /> */}
                            <div onClick={() => onPickedCmp(cmps[0].id)}>HEADER 1</div>
                        </div>
                    )
                }
            </Draggable>
            {/* <div onClick={() => onPickedCmp(cmps[1].id)}>HEADER 2</div> */}
        </div>}
    </div>
}