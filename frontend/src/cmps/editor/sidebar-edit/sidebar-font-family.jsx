

export function SidebarFontFamily({ title, propertyName, onChange }) {

    function onChangeFont({ target }) {
        target.title = target.value
        onChange(propertyName, target.value)



    }

    return <div className='flex space-between'>
        <label for="fonts">{title}</label>

        <select name="fonts" id="fonts" onChange={onChangeFont}>
            <option value="roboto-regular">Roboto</option>
            <option value="fe-serif">feSerif</option>
            <option value="dream-orphans">Dream Orphans</option>
            <option value="breamcatcher">Breamcatcher</option>
            <option value="handlee">Handlee</option>
        </select>
    </div>
}