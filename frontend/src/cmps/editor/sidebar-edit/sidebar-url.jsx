import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { uploadService } from '../../../services/upload.service'

export function SidebarUrl({ title, propertyName, onChange }) {
    const [url, setUrl] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);

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

    async function uploadImg(e) {
        const imgUpload = await uploadService.uploadImg(e)
        setUrl(imgUpload.url)
    }


    return <div className="sidebar-url">

        <form onChange={handleChange} onSubmit={submitUrl}>
            <label className="sidebar-url">{title}</label>
            <input type="url"
                value={url}
                placeholder="Enter url" />
            {/* <button onClick={onSubmit}>{info.btn.label}</button> */}
            <input
                type="file"
                value={selectedFile}
                onChange={uploadImg}
            />        </form>
        <img src={url} />
    </div>
}