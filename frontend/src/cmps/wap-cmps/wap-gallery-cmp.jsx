import { useSelector } from "react-redux"

export function GalleryCmp({ style, cmp, onElClick }) {

    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
    const info = cmp.info

    return (
        <div id={cmp.type} style={style} className={cmp.name} data-container={JSON.stringify(cmp)} onClick={onElClick}>
            {info.title.txt && <div className="title" suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.title.id} style={info.title.style} data-container={JSON.stringify(info.title)} onClick={onElClick}>{info.title.txt}</div>}
            {info.subtitle.txt && <div className="subtitle" suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.subtitle.id} style={info.subtitle.style} data-container={JSON.stringify(info.subtitle)} onClick={onElClick}>{info.subtitle.txt}</div>}
            <div className="wap-gallery-img-container">
                {info.photos.map(photo => {
                    return <div key={photo.url} className="photo-container">
                        <img src={photo.url} alt={''} suppressContentEditableWarning={true} contentEditable={selectedElement?.id === photo.id} style={photo.style} data-container={JSON.stringify(photo)} onClick={onElClick} />
                        {photo.title.txt && <h2 className="gallery-title" suppressContentEditableWarning={true} contentEditable={selectedElement?.id === photo.title.id} style={photo.title.style} data-container={JSON.stringify(photo.title)} onClick={onElClick}>{photo.title.txt}</h2>}
                        {photo.subtitle.txt && <p className="gallery-subtitle" suppressContentEditableWarning={true} contentEditable={selectedElement?.id === photo.subtitle.id} style={photo.subtitle.style} data-container={JSON.stringify(photo.subtitle)} onClick={onElClick}>{photo.subtitle.txt}</p>}
                    </div>
                })}

            </div >
            {info.btn.label && <a href="#" suppressContentEditableWarning={true} contentEditable={selectedElement?.id === info.btn.id} style={info.btn.style} data-container={JSON.stringify(info.btn)} onClick={onElClick}>{info.btn.label}</a>}
        </div>

    )
}

