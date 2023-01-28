import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { wapService } from '../../services/wap.service'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { saveWap, setDisplaySize } from '../../store/wap.actions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
// import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';


import { utilService } from '../../services/util.service'


export function DashboardBoard({ currWap }) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const user = useSelector((storeState => storeState.userModule.user))
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

    function onPreviewClick() {
        navigate(`/preview/${currWap._id}`)
    }



    const labels = ['August', 'September', 'October', 'November', 'December', 'January', 'February',];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => 100),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => 150),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    return (
        <div className='dashboard-board'>
            <h2>Welcome {user.username}</h2>
            <div className='dashboard-data-container'>
                {currWap ? <div>
                    {!currWap.isPublished && < div >
                        <div className='dashboard-board-header'>
                            <div className='flex published-msg tomato'>
                                <ErrorIcon />
                                <span>this website isn't published yet</span>
                            </div>
                            <img src={currWap.imgUrl} />
                            <div className='btn-container'>
                                <button className='publish-btn' onClick={onPublishClick}>Publish</button>
                                <div className='publish-container' style={{ display: isVisible ? 'block' : 'none' }}>
                                    <input onChange={(e) => setName(e.target.value)} placeholder='Please enter website name:' type={'text'} required />
                                    <button onClick={changeWapName} className='publish-btn'>Save</button>
                                </div>
                                <button className='edit-btn' onClick={onPreviewClick}>Preview</button>
                                <button className='edit-btn' onClick={() => navigate(`/editor/:${currWap._id}`)}>Edit</button>
                            </div>
                        </div>
                        {/* 
                    <div style={{ backgroundColor: 'red' }}><span>created at: </span>{utilService.getFormattedDate(currWap.createdAt)}</div>
                    <div style={{ backgroundColor: 'lightblue' }}><span>Last update at: </span>{utilService.timeSince(currWap.createdAt)}</div>
                    <div style={{ backgroundColor: 'green' }}><span>Website name: </span>{currWap.name}</div> */}

                    </div>}
                    {currWap.isPublished && < div >
                        <div className='dashboard-board-header'>
                            <div className='flex published-msg success'>
                                <CheckCircleIcon />
                                <span>"{currWap.name}" is published and available at the web!</span>
                            </div>
                            <img src={currWap.imgUrl} />
                            <div className='btn-container'>
                                <button className='publish-btn' onClick={onPreviewClick}>Preview</button>
                                <button className='edit-btn' onClick={() => navigate(`/editor/:${currWap._id}`)}>Edit</button>
                            </div>

                        </div>

                        {/* <div style={{ backgroundColor: 'red' }} > <span>created at: </span>{utilService.getFormattedDate(currWap.createdAt)}</div>
                    <div style={{ backgroundColor: 'lightblue' }}><span>Last update at: </span>{utilService.timeSince(currWap.createdAt)}</div>
                    <div style={{ backgroundColor: 'green' }}><span>Website name: </span>{currWap.name}</div> */}
                    </div>}

                </div> : <div>
                    <span>No wap to view</span>
                </div>}

                {currWap?.isPublished && <div>
                    <Line style={{ height: '300px' }} options={options} data={data} />;

                </div>}

            </div>
        </div >
    )
}