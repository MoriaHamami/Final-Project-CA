




export function FormCmp({ cmp }) {
    return (
        <div className={cmp.name}>
            <span className='subtitle'>{cmp.info.subtitle}</span>
            <h2 className='title'>{cmp.info.title}</h2>
            <form>
                {cmp.info.inputs?.map(input => {
                    return <input type={input.dataType} placeholder={input.placeholder} />
                })}
                <button>{cmp.info.btn.label}</button>
            </form>
    </div>
    )
}
