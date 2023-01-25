
// import { getCmpsByCategory } from '../../services/wap.service.local'
import { useState, useEffect } from "react"
import { Draggable } from "react-beautiful-dnd"
import { utilService } from "../../services/util.service"
import { wapService } from "../../services/wap.service"


export function SidebarAdd({ onPickedCmp, innerRef }) {

    const [cmpsByCurrType, setCmpsByCurrType] = useState(wapService.getCmpsByCategory('headers'))
    const [selectedType, setSelectedType] = useState('headers')

    useEffect(() => {

        const cmpsByCurrType = wapService.getCmpsByCategory(selectedType)
        // console.log('cmpsByCurrType:', cmpsByCurrType)
        // console.log('setSelectedType:', selectedType)
        setCmpsByCurrType(cmpsByCurrType)
    }, [selectedType])

    // function onSetCmpsByCurrType(type) {
    // }
    // const headerCmps = wapService.getCmpsByCategory('headers')

    const cmpTypes = wapService.getCmpTypes()

    return <div className="add-main-container" ref={innerRef}>

        <h2 className="add-header">Add section</h2>

        <div className="add-container">


            <div className="add-sidebar-type">
                {cmpTypes.map(cmpType => <div key={cmpType} className={cmpType === selectedType ? 'active' : ''} onClick={() => setSelectedType(cmpType)}>{cmpType}</div>)}
            </div>

            <div className="elements-container">
                {cmpsByCurrType.map((cmp, index) => {
                    // return <Draggable draggableId={cmp.name} key={cmp.id} index={index}>

                        return <Draggable draggableId={JSON.stringify(cmp)} key={cmp.id} index={index}>
                            {
                                (provided, snapshot) => (
                                    <>
                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            {/* <div className="active">{cmp.imgUrl}</div> */}
                                            <img src={cmp.imgUrl} />
                                        </div>
                                            {provided.placeholder}
                                        {snapshot.isDragging && <img src={cmp.imgUrl} />}
                                    </>

                                )
                            }
                        </Draggable>

                    // <Draggable draggableId={cmp.id} key={cmp.id} index={index} >
                    //     {
                                //         (provided, snapshot) => (
                                //             <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                //                 {/* <img src={cmp.imgUrl} /> */}
                                //                 <div className="active">{cmp.name}</div>
                                //                 {provided.placeholder}
                                //             </div>
                                //         )
                                //     }
                                // </Draggable>
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