import React from 'react'

import { useSelector } from 'react-redux'

export function VideoCmp({ style, cmp, onElementClick }) {
    const selectedElementId = useSelector((storestate) => storestate.wapModule.selectedElementId)
    const info = cmp.info

    return (
        <div id={cmp.type} style={style} className={cmp.name} data-container='parent' onClick={onElementClick}>
            {cmp.info.title && <h2 data-container={info.title.id} onClick={onElementClick} style={info.title.style} className="title" contentEditable={selectedElementId === info.title.id} suppressContentEditableWarning={true} >{info.title.txt}</h2>}
            {cmp.info.subtitle && <p data-container={info.subtitle.id} onClick={onElementClick} style={info.subtitle.style} className="subtitle" contentEditable={selectedElementId === info.subtitle.id} suppressContentEditableWarning={true} >{info.subtitle.txt}</p>}
            <div className="wap-card-video-container">
                <iframe
                    style={cmp.info.iframeStyle}
                    src={`https://www.youtube.com/embed/${cmp.info.embedId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </div>
    )
}

