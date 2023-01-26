import { useState } from "react"
import { useSelector } from "react-redux"

export function GalleryCmp({ style, cmp, onElClick, selectedCmpId, displayClass }) {
    const [isOn, setIsOn] = useState({ cmp: false, title: false, subtitle: false, txt: false, btn: false, })

    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
    const info = cmp.info

    return (
        <div id={cmp.type} style={style}
            className={((selectedCmpId === cmp.id && selectedElement?.id === cmp.id) ? 'selected' : '') + ' ' + cmp.name + ' ' + displayClass + ' ' + (selectedElement?.id !== cmp.id && isOn.cmp && 'hover-cmp')}
            onMouseOut={() => setIsOn((prevIsOn) => {
                return { ...prevIsOn, cmp: false }
            })}
            onMouseOver={() => setIsOn((prevIsOn) => {
                return { ...prevIsOn, cmp: true }
            })}
            data-container={JSON.stringify(cmp)} onClick={onElClick}
        >
            {info.title?.txt && <div
                className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.title.id) ? 'selected' : ''} title ${selectedElement?.id !== info.title.id && isOn.title && 'hover'}`}
                onMouseOut={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, title: false }
                })}
                onMouseOver={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, title: true }
                })}
                suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.title.id} style={info.title.style} data-container={JSON.stringify(info.title)} onClick={onElClick}>{info.title.txt}
            </div>}
            {info.subtitle?.txt && <div
                className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.subtitle.id) ? 'selected' : ''} subtitle ${selectedElement?.id !== info.subtitle.id && isOn.subtitle && 'hover'}`}
                onMouseOut={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, subtitle: false }
                })}
                onMouseOver={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, subtitle: true }
                })}
                suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.subtitle.id} style={info.subtitle.style} data-container={JSON.stringify(info.subtitle)} onClick={onElClick}>{info.subtitle.txt}</div>}

            <div className="wap-gallery-img-container">
                {info.photos.map((photoInfo, idx) => {
                    return (
                        <div key={photoInfo.photo.url} className="photo-container">
                            {photoInfo.photo && <img src={photoInfo.photo.url} alt={''}
                                className={`${(selectedCmpId === cmp.id && selectedElement?.id === photoInfo.photo.id) ? 'selected' : ''}  ${selectedElement?.id !== photoInfo.photo.id && isOn['img' + idx] && 'hover'}`}
                                onMouseOut={() => setIsOn((prevIsOn) => {
                                    return { ...prevIsOn, ['img' + idx]: false }
                                })}
                                onMouseOver={() => setIsOn((prevIsOn) => {
                                    return { ...prevIsOn, ['img' + idx]: true }
                                })}

                                suppressContentEditableWarning={true} contentEditable={selectedElement?.id === photoInfo.photo.id} style={photoInfo.photo.style} data-container={JSON.stringify(photoInfo.photo)} onClick={onElClick} />}
                            <div className="txt-container">
                                {photoInfo.title?.txt && <h2

                                    className={`${(selectedCmpId === cmp.id && selectedElement?.id === photoInfo.title.id) ? 'selected' : ''} gallery-title  ${selectedElement?.id !== photoInfo.title.id && isOn['img-title' + idx] && 'hover'}`}
                                    onMouseOut={() => setIsOn((prevIsOn) => {
                                        return { ...prevIsOn, ['img-title' + idx]: false }
                                    })}
                                    onMouseOver={() => setIsOn((prevIsOn) => {
                                        return { ...prevIsOn, ['img-title' + idx]: true }
                                    })}
                                    suppressContentEditableWarning={true} contentEditable={selectedElement?.id === photoInfo.title.id} style={photoInfo.title.style} data-container={JSON.stringify(photoInfo.title)} onClick={onElClick}>{photoInfo.title.txt}
                                </h2>}
                                {photoInfo.subtitle?.txt &&
                                    <p
                                        className={`${(selectedCmpId === cmp.id && selectedElement?.id === photoInfo.subtitle.id) ? 'selected' : ''} gallery-subtitle  ${selectedElement?.id !== photoInfo.subtitle?.id && isOn['img-subtitle' + idx] && 'hover'}`}
                                        onMouseOut={() => setIsOn((prevIsOn) => {
                                            return { ...prevIsOn, ['img-subtitle' + idx]: false }
                                        })}
                                        onMouseOver={() => setIsOn((prevIsOn) => {
                                            return { ...prevIsOn, ['img-subtitle' + idx]: true }
                                        })}
                                        suppressContentEditableWarning={true} contentEditable={selectedElement?.id === photoInfo.subtitle.id} style={photoInfo.subtitle.style} data-container={JSON.stringify(photoInfo.subtitle)} onClick={onElClick}>{photoInfo.subtitle.txt}</p>}
                            </div>
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
    // </div>
}

