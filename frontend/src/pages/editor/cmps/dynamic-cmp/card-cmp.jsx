export function CardCmp({ cmp }) {
    return (
        <div className='card'>
            {cmp.info.txt ? <span>{cmp.info.txt}</span> : ''}
            <div className="card-img-container"><img src={cmp.info.imgUrl} /></div>
            
        </div>
    )
}

