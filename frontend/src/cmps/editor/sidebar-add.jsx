
// import { getCmpsByCategory } from '../../services/wap.service.local'
import { useState, useEffect } from "react"
import { Draggable } from "react-beautiful-dnd"
import { wapService } from "../../services/wap.service"


export function SidebarAdd({ onPickedCmp }) {

    const headerCmps = wapService.getCmpsByCategory('headers')
    console.log('headerCmps:', headerCmps)
    return <div>
        
        {headerCmps.map((cmp, index) => {
            return <Draggable draggableId={cmp.id} key={cmp.id} index={index} >
                {
                    (provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div>{cmp.id}</div>
                        </div>
                    )
                }
            </Draggable>
        })}
        {/* {provided.placeholder} */}


    </div>
}
{/* {cmps.length && <div>
    <div onClick={() => onPickedCmp(cmps[1].id)}>HEADER 2</div>
</div>} */}

{/* {cmps.length && <select name="cars" id="cars" onChange={onPickedCmp}>
    <option value={cmps[0].id}>Header1</option>
    <option value={cmps[1].id}>Header2</option>
</select>} */}