
// import { getCmpsByCategory } from '../../services/wap.service.local'
import { useState, useEffect } from "react"
import { Draggable } from "react-beautiful-dnd"
import { wapService } from "../../services/wap.service"


export function SidebarAdd({ onPickedCmp, innerRef }) {

    const headerCmps = wapService.getCmpsByCategory('headers')
    // console.log('headerCmps:', headerCmps)

    return <div className="add-main-container" ref={innerRef}>

           <h2 className="add-header">Add section</h2>

        <div className="add-container">

        
        <div className="add-side-bar">
            <div>Headers</div>
            <div>Heros</div>
            <div>Previews</div>
            <div>Maps</div>
            <div>Videos</div>
            <div>Forms</div>
            <div>Footers</div>

        </div>

        <div className="elements-container">
            {headerCmps.map((cmp, index) => {
                return <Draggable draggableId={cmp.id} key={cmp.id} index={index} >
                    {
                        (provided, snapshot) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <img src={cmp.imgUrl} />
                                {/* <div>{cmp.imgUrl}</div> */}
                                {provided.placeholder}
                            </div>
                        )
                    }
                </Draggable>
            })}
        </div>
        </div>


    </div>
}
{/* {cmps.length && <div>
    <div onClick={() => onPickedCmp(cmps[1].id)}>HEADER 2</div>
</div>} */}

{/* {cmps.length && <select name="cars" id="cars" onChange={onPickedCmp}>
    <option value={cmps[0].id}>Header1</option>
    <option value={cmps[1].id}>Header2</option>
</select>} */}