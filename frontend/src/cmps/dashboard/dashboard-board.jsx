import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { wapService } from '../../services/wap.service'
import { utilService } from '../../services/util.service'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { saveWap, setDisplaySize } from '../../store/wap.actions';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import EventIcon from '@mui/icons-material/Event'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PreviewIcon from '@mui/icons-material/Preview'
import ErrorIcon from '@mui/icons-material/Error';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
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


import { PublishModal } from '../publish-modal'


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

    function onPreviewClick() {
        navigate(`/preview/${currWap._id}`)
    }



    const labels = ['20/01', '21/01', '22/01', '23/01', '24/01', '25/01', '26/01','27/01', '28/01', '29/01', '30/01','31/01'];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Views per day',
            },
        },
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'number of views',
                data: labels.map(() => utilService.getRandomIntInclusive(0,20)),
                borderColor: '#3899ec',
                backgroundColor: '#3899ec',
            },
        ],
    }

    return (
        <div className='dashboard-board'>
            <h2>{user.username.charAt(0).toUpperCase() + user.username.substring(1).toLowerCase()}'s workspace</h2>
            <div className='dashboard-data-container'>
                {currWap ? <div>
                    {!currWap.isPublished && < div >
                        <div className='dashboard-board-header'>
                            <div className='flex published-msg tomato'>
                                <ErrorIcon />
                                <span>This website isn't published yet</span>
                            </div>
                            <img src={currWap.imgUrl} />
                            <div className='btn-container'>
                                <PublishModal currWap={currWap} />


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
                                <span>"{currWap.name}" is published and available on the web!</span>
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
                    <Line style={{ height: '320px', marginTop:'0' }} options={options} data={data} />

                    <div className='cards-container'>
                        <div className='total-subscribers details-container'>
                            <div className='dashboard-icon-container'>
                                <SupervisedUserCircleIcon style={{}} />
                            </div>
                            <div className='text'>
                                <span>Total subscribers</span>
                                <span>3</span>
                            </div>
                        </div>
                        <div className='total-views details-container'>
                            <div className='dashboard-icon-container'>
                                <PreviewIcon />
                            </div>
                            <div className='text'>
                                <span>Total site views</span>
                                <span>6</span>
                            </div>
                        </div>
                        <div className='creates-at details-container'>
                            <div className='dashboard-icon-container'>
                                <EventIcon />
                            </div>
                            <div className='text'>
                                <span>Creation date</span>
                                <span>{utilService.getFormattedDate(currWap.createdAt)}</span>
                            </div>
                        </div>
                        <div className='creates-at details-container'>
                            <div className='dashboard-icon-container'>
                                <BrowserUpdatedIcon />
                            </div>
                            <div className='text'>
                                <span>Latest update</span>
                                <span>{utilService.timeSince(currWap.updatedAt)}</span>
                            </div>
                        </div>
                    </div>

                </div>}

                {/* <Line options={options} data={data} />; */}
            </div>
        </div >
    )
}