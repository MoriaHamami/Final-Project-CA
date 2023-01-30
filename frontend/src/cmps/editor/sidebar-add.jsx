
// import { getCmpsByCategory } from '../../services/wap.service.local'
import { useState, useEffect } from "react"
import { Draggable } from "react-beautiful-dnd"
import { utilService } from "../../services/util.service"
import { wapService } from "../../services/wap.service"


export function SidebarAdd({ onPickedCmp, innerRef }) {

    const [selectedType, setSelectedType] = useState('headers')
    const [cmpsByCurrType, setCmpsByCurrType] = useState(null)
    // const [cmpsByCurrType, setCmpsByCurrType] = useState(wapService.getCmpsByType('headers'))
    // const [cmpsByCurrType, setCmpsByCurrType] = useState(wapService.getCmpsByCategory('headers'))


    useEffect(() => {
        setCmpsByType(selectedType)
    }, [selectedType])

    async function setCmpsByType(selectedType) {
        setCmpsByCurrType(null)
        const cmpsByCurrType = await wapService.getCmpsByType(selectedType)
        console.log('cmpsByCurrType:', cmpsByCurrType)
        setCmpsByCurrType(cmpsByCurrType)
    }
    // function onSetCmpsByCurrType(type) {
    // }
    // const headerCmps = wapService.getCmpsByCategory('headers')

    console.log('cmpsByCurrType:',cmpsByCurrType)

    const cmpTypes = wapService.getCmpTypes()

    return <div className="add-main-container" ref={innerRef}>


        <div className="add-container">


            <div className="add-sidebar-type">
                {cmpTypes.map(cmpType => <div key={cmpType} className={cmpType === selectedType ? 'active' : ''} onClick={() => setSelectedType(cmpType)}>{cmpType}</div>)}
            </div>
            {/* {console.log('cmpsByCurrType:', cmpsByCurrType)} */}
            {!cmpsByCurrType && <div className="elements-container"><div className="mini-loader"></div></div>}
            {cmpsByCurrType && <div className="elements-container">
                {cmpsByCurrType.map((cmp, index) => {
                    // return <Draggable draggableId={cmp.name} key={cmp.id} index={index}>
                    // console.log('cmp:', cmp)

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
            </div>}
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