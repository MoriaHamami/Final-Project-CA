export function CardCmp({ cmp }) {
    return (
        <div className='wap-card'>
            {cmp.info.txt ? <span>{cmp.info.txt}</span> : ''}
            <div className="wap-card-img-container"><img src={cmp.info.imgUrl} /></div>
            
        </div>
    )
}

