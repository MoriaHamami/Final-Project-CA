
export function FormCmp({ style, cmp }) {
    return (
        <div id={cmp.type} style={style} className={cmp.name}>
            <h2 className='title'>{cmp.info.title}</h2>
            <span className='subtitle'>{cmp.info.subtitle}</span>
            <form>
                {cmp.info.inputs?.map(input => {
                    return <input type={input.dataType} placeholder={input.placeholder} key={input.id} />
                })}
                <button>{cmp.info.btn.label}</button>
            </form>
    </div>
    )
}
