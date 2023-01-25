import React, { useState } from 'react'

import { useSelector } from 'react-redux'

export function VideoCmp({ style, cmp, onElClick, selectedCmpId }) {
    const [isOn, setIsOn] = useState({ cmp: false, title: false, subtitle: false, txt: false, btn: false, img: false, video: false })

    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
    const info = cmp.info

    return (
        <div id={cmp.type}
            style={style}
            data-container={JSON.stringify(cmp)}
            onClick={onElClick}
            className={((selectedCmpId === cmp.id && selectedElement?.id === cmp.id) ? 'selected' : '') + ' ' + cmp.name + ' ' + (selectedElement?.id !== cmp.id && isOn.cmp && 'hover-cmp')}
            onMouseOut={() => setIsOn((prevIsOn) => {
                return { ...prevIsOn, cmp: false }
            })}
            onMouseOver={() => setIsOn((prevIsOn) => {
                return { ...prevIsOn, cmp: true }
            })}>

            {cmp.info.title && <h2
                data-container={JSON.stringify(info.title)}
                onClick={onElClick}
                style={info.title.style}
                contentEditable={selectedElement?.id === info.title.id}
                suppressContentEditableWarning={true}
                className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.title.id) ? 'selected' : ''} title ${selectedElement?.id !== info.title.id && isOn.title && 'hover'}`}
                onMouseOut={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, title: false }
                })}
                onMouseOver={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, title: true }
                })} >
                {info.title.txt}
            </h2>}

            {cmp.info.subtitle && <p data-container={JSON.stringify(info.subtitle)}
                style={info.subtitle.style}
                onClick={onElClick}
                contentEditable={selectedElement?.id === info.subtitle.id}
                suppressContentEditableWarning={true}
                className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.subtitle.id) ? 'selected' : ''} subtitle ${selectedElement?.id !== info.subtitle.id && isOn.subtitle && 'hover'}`}
                onMouseOut={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, subtitle: false }
                })}
                onMouseOver={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, subtitle: true }
                })} >
                {info.subtitle.txt}
            </p>}

            <div className="wap-card-video-container" data-container={JSON.stringify(info.video)} onClick={onElClick}
                onMouseOut={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, video: false }
                })}
                onMouseOver={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, video: true }
                })}>
                <iframe
                    style={cmp.info.video.style}
                    src={cmp.info.video.url}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <div className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.video.id) ? 'selected' : ''}  edit-icon ${selectedElement?.id !== info.video.id && isOn.video && 'hover'}`}>
                ✎
            </div>
        </div>
    )
}

