export function CardCmp({ cmp }) {
    return (
        <div id={cmp.id} className='wap-card'>
            <div className="wap-card-img-container"><img src={cmp.info.imgUrl} /></div>
            {cmp?.info?.title && <h2 className="card-title">{cmp.info.title}</h2>}
            {cmp?.info?.subtitle && <p className="card-subtitle">{cmp.info.subtitle}</p>}
            
        </div>
    )
}

