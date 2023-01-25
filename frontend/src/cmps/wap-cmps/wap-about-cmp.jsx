import { useState } from "react"
import { useSelector } from "react-redux"

export function AboutCmp({ style, cmp, onElClick, selectedCmpId }) {
    const [isOn, setIsOn] = useState({ cmp: false, title: false, subtitle: false, txt: false, btn: false, img: false })

    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
    const info = cmp.info

    return (
        <div id={cmp.type} style={style} data-container={JSON.stringify(cmp)} onClick={onElClick}
            className={((selectedCmpId === cmp.id && selectedElement?.id === cmp.id) ? 'selected' : '') + ' ' + cmp.name + ' ' + (selectedElement?.id !== cmp.id && isOn.cmp && 'hover')}
            onMouseOut={() => setIsOn((prevIsOn) => {
                return { ...prevIsOn, cmp: false }
            })}
            onMouseOver={() => setIsOn((prevIsOn) => {
                return { ...prevIsOn, cmp: true }
            })}
        >
            <div className="text-container">
                {info.title.txt && <div suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.title.id} style={info.title.style} data-container={JSON.stringify(info.title)} onClick={onElClick}
                    className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.title.id) ? 'selected' : ''} title ${selectedElement?.id !== info.title.id && isOn.title && 'hover'}`}
                    onMouseOut={() => setIsOn((prevIsOn) => {
                        return { ...prevIsOn, title: false }
                    })}
                    onMouseOver={() => setIsOn((prevIsOn) => {
                        return { ...prevIsOn, title: true }
                    })}>{info.title.txt}
                </div>}
                {info.subtitle.txt && <div suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.subtitle.id} style={info.subtitle.style} data-container={JSON.stringify(info.subtitle)} onClick={onElClick}
                    className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.subtitle.id) ? 'selected' : ''} subtitle ${selectedElement?.id !== info.subtitle.id && isOn.subtitle && 'hover'}`}
                    onMouseOut={() => setIsOn((prevIsOn) => {
                        return { ...prevIsOn, subtitle: false }
                    })}
                    // onMouseOver={() => setIsOn(true)}
                    onMouseOver={() => setIsOn((prevIsOn) => {
                        return { ...prevIsOn, subtitle: true }
                    })}>{info.subtitle.txt}</div>}
                {/* {info.photos.map(photo => { */}
                {/* return <div key={photo.url} className="photo-container"> */}
            </div>
            {/* {info.photos.map(photo => { */}
            {/* return <div key={photo.url} className="photo-container"> */}
           {info.photo &&  <div
                className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.photo.id) ? 'selected' : ''} img-container ${selectedElement?.id !== info.photo.id && isOn.img && 'hover'}`}
                onMouseOut={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, img: false }
                })}
                // onMouseOver={() => setIsOn(true)}
                onMouseOver={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, img: true }
                })}
            >
                <img src={info.photo.url} alt={''} suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.photo.id} style={info.photo.style} data-container={JSON.stringify(info.photo)} onClick={onElClick} />
            </div >}
            {info.txt?.txt && <p suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.txt.id} style={info.txt.style} data-container={JSON.stringify(info.txt)} onClick={onElClick}
                className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.txt.id) ? 'selected' : ''} gallery-subtitle ${selectedElement?.id !== info.txt.id && isOn.txt && 'hover'}`}
                onMouseOut={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, txt: false }
                })}
                // onMouseOver={() => setIsOn(true)}
                onMouseOver={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, txt: true }
                })}

            >{info.txt.txt}</p>}

            {info.btn?.label && <a href="#" className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.btn.id) ? 'selected' : ''}  ${selectedElement?.id !== info.btn.id && isOn.btn && 'hover'}`}
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

