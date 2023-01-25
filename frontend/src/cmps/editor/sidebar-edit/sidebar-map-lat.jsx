import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { TextField } from '@mui/material'

export function SidebarMapLat({ title, propertyName, onChange }) {
    const [latCordVal, setLatCordVal] = useState(0)
    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)

    useEffect(() => {
        console.log('selectedElement:', selectedElement)
        // const latCord = selectedElement?.cords[propertyName] ? selectedElement.cords[propertyName] : 0
        // setLatCordVal(latCord)
    }, [selectedElement])

    function handleChange({ target }) {
        setLatCordVal(target.value)
    }

    function submitLatCord(ev) {
        ev.preventDefault()
        console.log('target.value:', ev.target.value)
        // target.title = target.value
        // setLatCordVal(target.value)
        // onChange(propertyName, target.value)
    }

    return <div className="lat-container">

        <form onChange={handleChange} onSubmit={submitLatCord}>
            <label className="lat-label">{title}</label>
            <input type="number"
                value={latCordVal}
                placeholder="Enter cordinate" />
            {/* <button onClick={onSubmit}>{info.btn.label}</button> */}
        </form>

    </div>
}