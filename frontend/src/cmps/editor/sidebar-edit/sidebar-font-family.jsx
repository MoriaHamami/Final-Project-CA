import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export function SidebarFontFamily({ title, propertyName, onChange }) {
    const [fontFamilyVal, setfontFamilyVal] = useState('roboto-regular')
    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)

    useEffect(() => {
        const fontFamily = selectedElement?.style[propertyName] ? selectedElement.style[propertyName] : 'roboto-regular'
        setfontFamilyVal(fontFamily)
    }, [selectedElement])



    function onChangeFont({ target }) {
        target.title = target.value
        setfontFamilyVal(target.value)
        onChange(propertyName, target.value)
    }

    const fonts = [
        'roboto-regular',
        'fe-serif',
        'dream-orphans',
        'breamcatcher',
        'handlee',
        'abel',
        'open-sans',
        'playfair-regular',
        'mont-light',
        'mont-heavy',
        'caviar-dreams-Bold',
        'roboto-light',
        'roboto-bold'
    ]

    return <div className='flex space-between font-family-container'>
        <label className='font-family-label' htmlFor="fonts">{title}</label>

        <Select
            //BE AWARE!, sans-serif is the default font-family when no font-family found on the selected element
            onChange={onChangeFont}
            id="fonts"
            displayEmpty
            size='small'
            inputProps={{ 'aria-label': 'Without label' }}
            style={{ fontSize: '13px', width: '100px', height: '25px' }}
            value={fontFamilyVal}
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