import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { wapService } from '../../services/wap.service'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { saveWap, setDisplaySize } from '../../store/wap.actions';

import { utilService } from '../../services/util.service'


export function DashboardBoard({ currWap }) {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const [name, setName] = useState('')

  const onPublishClick = () => {
    setIsVisible(!isVisible)
  }

  async function changeWapName() {
    try {
      const wapToPublish = { ...currWap, name: name, isPublished: true }
      // delete wapToPublish._id
      await saveWap(wapToPublish)
      setIsVisible(prevState => !prevState)
      window.open(`/publish/${wapToPublish.name}`, '_blank')
    } catch (err) {
      console.log('Could not change wap name')
    }
  }

  return (
    <div>
      {currWap ? <div>
        {!currWap.isPublished && < div >
          <span>this website is not published</span>
          <button onClick={() => navigate(`/editor/:${currWap._id}`)}>Edit</button>
          <button onClick={onPublishClick}>Publish</button>
          <div style={{ backgroundColor: 'red' }}><span>created at: </span>{utilService.getFormattedDate(currWap.createdAt)}</div>
          <div style={{ backgroundColor: 'lightblue' }}><span>Last update at: </span>{utilService.timeSince(currWap.createdAt)}</div>
          <div style={{ backgroundColor: 'green' }}><span>Website name: </span>{currWap.name}</div>

        </div>}
        {currWap.isPublished && < div >
          <span>this website is  published</span>
          <button onClick={() => navigate(`/editor/:${currWap._id}`)}>Edit</button>
          <div style={{ backgroundColor: 'red' }} > <span>created at: </span>{utilService.getFormattedDate(currWap.createdAt)}</div>
          <div style={{ backgroundColor: 'lightblue' }}><span>Last update at: </span>{utilService.timeSince(currWap.createdAt)}</div>
          <div style={{ backgroundColor: 'green' }}><span>Website name: </span>{currWap.name}</div>
        </div>}

      </div> : <div>
        <span>No wap to view</span></div>}

      <div className='publish-container' style={{ display: isVisible ? 'block' : 'none' }}>
        <input onChange={(e) => setName(e.target.value)} placeholder='Please enter website name:' type={'text'} required />
        <button onClick={changeWapName} className='publish-btn'>Save</button>
      </div>
    </div >
  )
}