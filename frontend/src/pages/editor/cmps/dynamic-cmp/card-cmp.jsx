export function CardCmp({ cmp }) {
    return (
        <div className='card'>
            <span>{cmp.info.txt}</span>
            <img src={cmp.info.imgUrl} />
        </div>
    )
}

