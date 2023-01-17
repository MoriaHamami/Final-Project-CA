export function ImgCmp({ cmp }) {
    return (
        <div className='img-container'>
            <img
                src={cmp.info.imgUrl}
                style={cmp.style}
            />
        </div>
    )
}

