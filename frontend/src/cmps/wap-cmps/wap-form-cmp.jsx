import { useSelector } from 'react-redux'

export function FormCmp({ style, cmp, onElementClick }) {
    const selectedElementId = useSelector((storestate) => storestate.wapModule.selectedElementId)
    const info = cmp.info
    console.log('color-----', style)
    // contentEditable={selectedElementId === info.logo.id}
    // data-container={info.logo.id}
    // style={info.logo.style}
    // onClick={handleChooseContainer}
    return (
        <div id={cmp.type} style={style} className={cmp.name} data-container='parent' onClick={onElementClick}>
            {console.log(cmp.name)}
            <h2 style={info.title.style} data-container={info.title.id} contentEditable={selectedElementId === info.title.id} onClick={onElementClick} className="title">{info.title.txt}</h2>
            {console.log('info', info.title.id)}
            <span style={info.subtitle.style} data-container={info.subtitle.id} contentEditable={selectedElementId === info.subtitle.id} onClick={onElementClick} className="subtitle">{info.subtitle.txt}</span>
            <form>
                {info.inputs?.map(input => {
                    return <input type={input.dataType} placeholder={input.placeholder} key={input.id}
                        style={input.style} data-container={input.id} onClick={onElementClick} />
                })}
                <button style={info.btn.style} data-container={info.btn.id} contentEditable={selectedElementId === info.btn.id} onClick={onElementClick} >{info.btn.label}</button>
            </form>
        </div>
    )
}
// style={info.txt.style} onClick={onElementClick} contentEditable={selectedElementId === info.txt.id} data-container={info.txt.id}