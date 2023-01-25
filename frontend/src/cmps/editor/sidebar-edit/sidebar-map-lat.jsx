import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { TextField } from '@mui/material'

export function SidebarMapLat({ title, propertyName, onChange }) {
    const [cords, setCords] = useState({lat: 0, lng: 0})
    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)

    useEffect(() => {
        // console.log('selectedElement:', selectedElement)
        const cords = selectedElement?.cords ? selectedElement.cords[propertyName] : ({lat: 0, lng: 0})
        setCords(cords)
    }, [selectedElement])

    function handleChange({ target }) {
        setCords(target.value)
    }

    function submitCords(ev) {
        ev.preventDefault()
        // console.log('target.value:',cords)
        // target.title = target.value
        // setCords(target.value)
        onChange(propertyName, cords)
    }

    return <div className="lat-container">

        <form onChange={handleChange} onSubmit={submitCords}>
            <label className="lat-label">{title}</label>
            <input type="number"
                value={cords.lat}
                placeholder="Enter map latitude" />
            {/* <button onClick={onSubmit}>{info.btn.label}</button> */}
        </form>

        <form onChange={handleChange} onSubmit={submitCords}>
            <label className="lng-label">{title}</label>
            <input type="number"
                name=""
                value={cords.lng}
                placeholder="Enter map longitude" />
            {/* <button onClick={onSubmit}>{info.btn.label}</button> */}
        </form>

    </div>
}