import { useState } from "react"
import { useSelector } from "react-redux"

export function GalleryCmp({ style, cmp, onElClick, selectedCmpId }) {
    const [isOn, setIsOn] = useState({ cmp: false, title: false, subtitle: false, txt: false, btn: false, })

    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
    const info = cmp.info

    return (
        <div id={cmp.type} style={style}
            className={((selectedCmpId === cmp.id && selectedElement?.id === cmp.id) ? 'selected' : '') + ' ' + cmp.name + ' ' + (selectedElement?.id !== cmp.id && isOn.cmp && 'hover')}
            onMouseOut={() => setIsOn((prevIsOn) => {
                return { ...prevIsOn, cmp: false }
            })}
            onMouseOver={() => setIsOn((prevIsOn) => {
                return { ...prevIsOn, cmp: true }
            })}
            data-container={JSON.stringify(cmp)} onClick={onElClick}
        >
            {info.title.txt && <div
                className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.title.id) ? 'selected' : ''} title ${selectedElement?.id !== info.title.id && isOn.title && 'hover'}`}
                onMouseOut={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, title: false }
                })}
                onMouseOver={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, title: true }
                })}
                suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.title.id} style={info.title.style} data-container={JSON.stringify(info.title)} onClick={onElClick}>{info.title.txt}
            </div>}
            {info.subtitle.txt && <div
                className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.subtitle.id) ? 'selected' : ''} subtitle ${selectedElement?.id !== info.subtitle.id && isOn.subtitle && 'hover'}`}
                onMouseOut={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, subtitle: false }
                })}
                onMouseOver={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, subtitle: true }
                })}
                suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.subtitle.id} style={info.subtitle.style} data-container={JSON.stringify(info.subtitle)} onClick={onElClick}>{info.subtitle.txt}</div>}
            <div className="wap-gallery-img-container">
                {info.photos.map((photo, idx) => {
                    return (
                        <div key={photo.url} className="photo-container">
                            <img src={photo.url} alt={''}
                                className={`${(selectedCmpId === cmp.id && selectedElement?.id === photo.id) ? 'selected' : ''}  ${selectedElement?.id !== photo.id && isOn['img' + idx] && 'hover'}`}
                                onMouseOut={() => setIsOn((prevIsOn) => {
                                    return { ...prevIsOn, ['img' + idx]: false }
                                })}
                                onMouseOver={() => setIsOn((prevIsOn) => {
                                    return { ...prevIsOn, ['img' + idx]: true }
                                })}

                                suppressContentEditableWarning={true} contentEditable={selectedElement?.id === photo.id} style={photo.style} data-container={JSON.stringify(photo)} onClick={onElClick} />
                            {photo.title.txt && <h2

                                className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.title.id) ? 'selected' : ''}gallery-title  ${selectedElement?.id !== info.title.id && isOn['title' + idx] && 'hover'}`}
                                onMouseOut={() => setIsOn((prevIsOn) => {
                                    return { ...prevIsOn, ['title' + idx]: false }
                                })}
                                onMouseOver={() => setIsOn((prevIsOn) => {
                                    return { ...prevIsOn, ['title' + idx]: true }
                                })}
                                suppressContentEditableWarning={true} contentEditable={selectedElement?.id === photo.title.id} style={photo.title.style} data-container={JSON.stringify(photo.title)} onClick={onElClick}>{photo.title.txt}
                            </h2>}
                            {photo.subtitle.txt &&
                                <p
                                    className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.subtitle.id) ? 'selected' : ''}gallery-subsubtitle  ${selectedElement?.id !== info.subtitle.id && isOn['subtitle' + idx] && 'hover'}`}
                                    onMouseOut={() => setIsOn((prevIsOn) => {
                                        return { ...prevIsOn, ['subtitle' + idx]: false }
                                    })}
                                    onMouseOver={() => setIsOn((prevIsOn) => {
                                        return { ...prevIsOn, ['subtitle' + idx]: true }
                                    })}
                                    suppressContentEditableWarning={true} contentEditable={selectedElement?.id === photo.subtitle.id} style={photo.subtitle.style} data-container={JSON.stringify(photo.subtitle)} onClick={onElClick}>{photo.subtitle.txt}</p>}
                        </div>
                    )
                })}

            </div >
            {info.btn?.label && <a href="#"
                onMouseOut={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, btn: false }
                })}
                // onMouseOver={() => setIsOn(true)}
                onMouseOver={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, btn: true }
                })}
                suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.btn.id} style={info.btn.style} data-container={JSON.stringify(info.btn)} onClick={onElClick}>{info.btn.label}</a>}
        </div>

    )
}

