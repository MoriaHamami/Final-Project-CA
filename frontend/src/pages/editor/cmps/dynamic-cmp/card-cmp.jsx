export function CardCmp({ cmp }) {
    return (
        <div id={cmp.id} className='wap-card'>
            {cmp.info.title ? <h2>{cmp.info.title}</h2> : ''}
            {cmp.info.subtitle ? <h4>{cmp.info.subtitle}</h4> : ''}
            <div className="wap-card-img-container"><img src={cmp.info.imgUrl} /></div>
            
        </div>
    )
}

