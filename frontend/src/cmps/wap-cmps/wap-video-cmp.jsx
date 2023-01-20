

export function VideoCmp({ style, cmp }) {
    // console.log(cmp.embedId)
    return (
        <div id={cmp.type} style={style} className={cmp.name}>
            {cmp.info.title && <h2 className="title">{cmp.info.title}</h2>}
            {cmp.info.subtitle && <p className="subtitle">{cmp.info.subtitle}</p>}
            <div className="wap-card-video-container">
                <iframe
                    // width={`${cmp.info.width}`}
                    // height={`${cmp.info.height}`}
                    style={cmp.info.iframeStyle}
                    // style={{width: cmp.info.width, height: cmp.info.height}}
                    src={`https://www.youtube.com/embed/${cmp.info.embedId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
                    allowFullScreen
                    // frameBorder="0"
                    title="Embedded youtube"
                />
            </div>
        </div>
    )
}

