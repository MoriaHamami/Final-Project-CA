import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'


export function SidebarFontFamily({ title, propertyName, onChange }) {

    function onChangeFont({ target }) {
        target.title = target.value
        onChange(propertyName, target.value)
    }

    const fonts = [
        'roboto-regular',
        'fe-serif',
        'dream-orphans',
        'breamcatcher',
        'handlee',
    ]

    return <div className='flex space-between'>
        <label for="fonts">{title}</label>

        <Select
            //BE AWARE!, sans-serif is the default font-family when no font-family found on the selected element
            onChange={onChangeFont}
            id="fonts"
            displayEmpty
            size='small'
            inputProps={{ 'aria-label': 'Without label' }}
            style={{ fontSize: '14px', width: '100px', height: '30px' }}
        >
            {fonts.map((font) => (
                <MenuItem
                    key={font}
                    value={font}
                    style={{ fontSize: '13px', width: '90%' }}
                >
                    {font}
                </MenuItem>
            ))}
        </Select>

        {/* <select name="fonts" id="fonts" onChange={onChangeFont}>
            <option value="roboto-regular">Roboto</option>
            <option value="fe-serif">feSerif</option>
            <option value="dream-orphans">Dream Orphans</option>
            <option value="breamcatcher">Breamcatcher</option>
            <option value="handlee">Handlee</option>
        </select> */}
    </div>
}