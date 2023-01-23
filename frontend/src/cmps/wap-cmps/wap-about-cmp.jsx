import { useSelector } from "react-redux"

export function AboutCmp({ style, cmp, onElClick }) {

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
                {info.photo.subtitle.txt && <p className="gallery-subtitle" suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.photo.subtitle.id} style={info.photo.subtitle.style} data-container={JSON.stringify(info.photo.subtitle)} onClick={onElClick}>{info.photo.subtitle.txt}</p>}
                {info.photo.title.txt && <h2 className="gallery-title" suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.photo.title.id} style={info.photo.title.style} data-container={JSON.stringify(info.photo.title)} onClick={onElClick}>{info.photo.title.txt}</h2>}
                {/* </div> */}
                {/* })} */}

            {info.btn.label && <a href="#" suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.btn.id} style={info.btn.style} data-container={JSON.stringify(info.btn)} onClick={onElClick}>{info.btn.label}</a>}
        </div>

    )
}

