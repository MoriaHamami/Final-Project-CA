import React from 'react'

import { useSelector } from 'react-redux'

export function VideoCmp({ style, cmp, onElClick }) {
    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
    const info = cmp.info

    return (
        <div id={cmp.type} style={style} className={cmp.name} data-container={JSON.stringify(cmp)} onClick={onElClick}>

            {cmp.info.title && <h2
                data-container={JSON.stringify(info.title)}
                onClick={onElClick}
                style={info.title.style}
                className="title"
                contentEditable={selectedElement?.id === info.title.id}
                suppressContentEditableWarning={true} >
                {info.title.txt}
            </h2>}

            {cmp.info.subtitle && <p data-container={JSON.stringify(info.subtitle)}
                onClick={onElClick}
                style={info.subtitle.style} className="subtitle"
                contentEditable={selectedElement?.id === info.subtitle.id}
                suppressContentEditableWarning={true} >
                {info.subtitle.txt}
            </p>}

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

