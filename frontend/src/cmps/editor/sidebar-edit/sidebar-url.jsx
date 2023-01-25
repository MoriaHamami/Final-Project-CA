import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export function SidebarUrl({ title, propertyName, onChange }) {
    const [url, setUrl] = useState('')
    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)

    useEffect(() => {
        // console.log('selectedElement:', selectedElement)
        const url = selectedElement?.url ? selectedElement?.url : ('')
        setUrl(url)
    }, [selectedElement])

    function handleChange({ target }) {
        setUrl(target.value)
    }

    function submitUrl(ev) {
        ev.preventDefault()
        // console.log('target.value:', url)
        // target.title = target.value
        // setUrl(target.value)
        onChange(propertyName, url)
    }

    return <div className="map-url">

        <form onChange={handleChange} onSubmit={submitUrl}>
            <label className="map">{title}</label>
            <input type="url"
                value={url}
                placeholder="Enter url" />
            {/* <button onClick={onSubmit}>{info.btn.label}</button> */}
        </form>

    </div>
}