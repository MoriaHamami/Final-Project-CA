

export function VideoCmp({ style, cmp }) {
    console.log(cmp.embedId)
    return (
        <div id={cmp.type} style={style} className={cmp.type}>
            <div className="wap-card-video-container">
                <iframe
                    width={`${cmp.info.width}`}
                    height={`${cmp.info.height}`}
                    src={`https://www.youtube.com/embed/${cmp.info.embedId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
                    allowFullScreen
                    frameBorder="0"

                    title="Embedded youtube"
                /></div>
            {cmp.info.title && <h2 className="card-title">{cmp.info.title}</h2>}
            {cmp.info.subtitle && <p className="card-subtitle">{cmp.info.subtitle}</p>}
        </div>
    )
}

