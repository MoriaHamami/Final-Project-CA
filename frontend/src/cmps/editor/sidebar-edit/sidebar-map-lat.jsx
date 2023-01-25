import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { TextField } from '@mui/material'

export function SidebarMapLat({ title, propertyName, onChange }) {
    const [latCoordVal, setLatCoordVal] = useState('roboto-regular')
    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)

    useEffect(() => {
        const latCoord = selectedElement?.style[propertyName] ? selectedElement.style[propertyName] : 'roboto-regular'
        setLatCoordVal(latCoord)
    }, [selectedElement])



    function onChangeLatCoord({ target }) {
        target.title = target.value
        setLatCoordVal(target.value)
        onChange(propertyName, target.value)
    }

    return <div className='lat-container'>

        {/* <label className='lat-label' htmlFor="lat">{title}</label>
        <form>
            <input type={input.dataType} placeholder={input.placeholder} key={input.id} />
            <button onClick={onSubmit}>{info.btn.label}</button>
        </form> */}

    </div>
}