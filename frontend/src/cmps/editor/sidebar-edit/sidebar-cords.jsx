import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export function SidebarCords({ title, propertyName, onChange }) {
    const [cords, setCords] = useState({ lat: 0, lng: 0 })
    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)

    useEffect(() => {
        // console.log('selectedElement:', selectedElement)
        const cords = selectedElement?.cords ? selectedElement?.cords : ({ lat: 0, lng: 0 })
        setCords(cords)
    }, [selectedElement])

    function handleChange({ target }) {
        const cordName = target.name
        const cordVal = target.value
        setCords((prevCords) => {
            return { ...prevCords, [cordName]: +cordVal }
        })
    }

    function submitCords(ev) {
        ev.preventDefault()
        // console.log('target.value:', cords)
        // target.title = target.value
        // setCords(target.value)
        onChange(propertyName, cords)
    }

    return <div className="map-cords">
            <div>{title}</div>

        <form onChange={handleChange} onSubmit={submitCords}>
            <label className="lat-label">Latitude</label>
            <input type="number"
                name="lat"
                value={cords.lat}
                placeholder="Enter map latitude" />
            {/* <button onClick={onSubmit}>{info.btn.label}</button> */}
        </form>

        <form onChange={handleChange} onSubmit={submitCords}>
            <label className="lng-label">Longitude</label>
            <input type="number"
                name="lng"
                value={cords.lng}
                placeholder="Enter map longitude" />
            {/* <button>{info.btn.label}</button> */}
        </form>

    </div>
}