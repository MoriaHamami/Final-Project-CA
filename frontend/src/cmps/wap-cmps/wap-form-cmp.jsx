import React from 'react'
import { useSelector } from 'react-redux'

export function FormCmp({ style, cmp, onElClick }) {

    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
    const info = cmp.info

    return (
        <div id={cmp.type} style={style} className={cmp.name} data-container={JSON.stringify(cmp)} onClick={onElClick}>
            <h2 style={info.title.style} data-container={JSON.stringify(info.title)} contentEditable={selectedElement?.id === info.title.id} onClick={onElClick} className="title">{info.title.txt}</h2>
            <span style={info.subtitle.style} data-container={JSON.stringify(info.subtitle)} contentEditable={selectedElement?.id === info.subtitle.id} onClick={onElClick} className="subtitle">{info.subtitle.txt}</span>
            <form>
                {info.inputs?.map(input => {
                    return <input type={input.dataType} placeholder={input.placeholder} key={input.id}
                        style={input.style} data-container={JSON.stringify(input)} onClick={onElClick} />
                })}
                <button style={info.btn.style} data-container={JSON.stringify(info.btn)} contentEditable={selectedElement?.id === info.btn.id} onClick={onElClick} >{info.btn.label}</button>
            </form>
        </div>
    )
}
// style={info.txt.style} onClick={onElClick} contentEditable={selectedElement?.id === info.txt.id} data-container={info.txt.id}