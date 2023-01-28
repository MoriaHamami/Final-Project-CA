import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { uploadService } from '../../../services/upload.service'

export function SidebarUrl({ title, propertyName, onChange }) {
    const [url, setUrl] = useState('')
    const urlInputRef = useRef()
    const [selectedFile, setSelectedFile] = useState(null);

    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)

    console.log('selectedElement:', selectedElement)

    useEffect(() => {
        const url = selectedElement?.url ? selectedElement?.url : ('')
        setUrl(url)
    }, [selectedElement])

    function handleChange({ target }) {
        setUrl(target.value)
    }

    function submitUrl(ev) {
        ev.preventDefault()
        onChange(propertyName, url)
        setUrl('')
        if (urlInputRef.current) {
            urlInputRef.current.value = ''
        }
        setSelectedFile(null)

    }

    async function uploadImg(e) {
        const imgUpload = await uploadService.uploadImg(e)
        setUrl(imgUpload.url)
        onChange(propertyName, imgUpload.url)
        setSelectedFile(null)
    }


    return <div className="sidebar-url">

        <form onChange={handleChange} onSubmit={submitUrl}>
            {/* <label className="sidebar-url">{title}</label> */}
            <input
                ref={urlInputRef}
                type="url"
                placeholder="Enter url" />
            <input
                id='upload-file'
                style={{ display: 'none' }}
                type="file"
                value={selectedFile}
                onChange={uploadImg}
            />
        </form>
        {selectedElement.type === 'img' && <img src={url} />}
        {selectedElement.type === 'video' && <iframe
            style={{ width: '250px', height: '150px' }}
            src={url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
            title="Embedded youtube"
        />}
        <label htmlFor='upload-file' className='upload-url-btn'><span class="material-symbols-outlined upload-icon">cloud_upload</span> upload</label>
    </div>
}