import { useSelector } from "react-redux"

export function AboutCmp({ style, cmp, onElClick, selectedCmpId }) {

    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
    const info = cmp.info

    return (
        <div id={cmp.type} style={style} className={cmp.name} data-container={JSON.stringify(cmp)} onClick={onElClick}>
            {info.title.txt && <div className="title" suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.title.id} style={info.title.style} data-container={JSON.stringify(info.title)} onClick={onElClick}>{info.title.txt}</div>}
            {info.subtitle.txt && <div className="subtitle" suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.subtitle.id} style={info.subtitle.style} data-container={JSON.stringify(info.subtitle)} onClick={onElClick}>{info.subtitle.txt}</div>}
            {/* {info.photos.map(photo => { */}
            {/* return <div key={photo.url} className="photo-container"> */}
            <div className="img-container">
                <img src={info.photo.url} alt={''} suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.photo.id} style={info.photo.style} data-container={JSON.stringify(info.photo)} onClick={onElClick} />
            </div >
            {info.txt.txt && <p className="gallery-subtitle" suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.txt.id} style={info.txt.style} data-container={JSON.stringify(info.txt)} onClick={onElClick}>{info.txt.txt}</p>}

            {info.btn.label && <a href="#" suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.btn.id} style={info.btn.style} data-container={JSON.stringify(info.btn)} onClick={onElClick}>{info.btn.label}</a>}
        </div>

    )
}

