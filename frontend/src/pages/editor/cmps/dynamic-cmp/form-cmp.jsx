




export function FormCmp({ cmp }) {
    return (
        <div id={cmp.id} className={cmp.name}>
            <h2 className='title'>{cmp.info.title}</h2>
            <span className='subtitle'>{cmp.info.subtitle}</span>
            <form>
                {cmp.info.inputs?.map(input => {
                    return <input type={input.dataType} placeholder={input.placeholder} />
                })}
                <button>{cmp.info.btn.label}</button>
            </form>
    </div>
    )
}
