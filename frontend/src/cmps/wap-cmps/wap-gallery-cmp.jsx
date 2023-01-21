export function GalleryCmp({ style, cmp }) {
    return (
        <div id={cmp.type} style={style} className={cmp.name}>
            <div className="wap-gallery-img-container">
                {cmp.photos.map(photo => {
                    return <span className="photo-container">
                        <img src={photo.url} />
                        {photo.title && <h2 className="gallery-title">{photo.title}</h2>}
                        {photo.txt && <p className="gallery-subtitle">{photo.txt}</p>}
                    </span>
                })}

            </div >
        </div>

    )
}

