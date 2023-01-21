export function GalleryCmp({ style, cmp }) {
    return (
        <div id={cmp.type} style={style} className={cmp.type}>
            <div className="wap-gallery-img-container"><img src={cmp.info.imgUrl} /></div>
            {cmp?.info.title && <h2 className="gallery-title">{cmp.info.title}</h2>}
            {cmp?.info.subtitle && <p className="gallery-subtitle">{cmp.info.subtitle}</p>}
            
        </div>
    )
}

