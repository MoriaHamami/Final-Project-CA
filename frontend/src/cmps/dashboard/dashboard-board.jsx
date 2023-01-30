import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { wapService } from '../../services/wap.service'
// import { utilService } from '../../services/util.service'
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

    function onWebsiteClick() {
        navigate(`/${currWap.name}`)
    }

    function getStats(initialVal, minDiff, maxDiff) {
        let stats = [initialVal]
        let prevNum = initialVal
        for (let i = 0; i < 12; i++) {
            const randDiff = utilService.getRandomIntInclusive(minDiff, maxDiff)
            stats.push(prevNum + randDiff)
        }
        console.log('stats:', stats)
        return stats
    }

    const labels = ['20/01', '21/01', '22/01', '23/01', '24/01', '25/01', '26/01', '27/01', '28/01', '29/01', '30/01', '31/01'];

    const viewsOpts = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Views per day',
            },
        },
    }

    const subsOpts = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Subscribers per day',
            },
        },
    }

    const viewsData = {
        labels,
        datasets: [
            {
                // label: 'number of views',
                data: getStats(20, -1, 4),
                borderColor: '#3899ec',
                backgroundColor: '#3899ec',
            },
        ],
    }

    const subsData = {
        labels,
        datasets: [
            {
                // label: 'number of views',
                data: getStats(5, 0, 4),
                borderColor: '#3899ec',
                backgroundColor: '#3899ec',
            },
        ],
    }

    function getDatasetSum(dataset) {
            const datasetSum =  dataset.datasets[0].data.reduce((acc, data) => {
                acc += data
                return acc
            }, 0)
            return Math.round(datasetSum)
    }

    // console.log( utilService.getCapitalizedName('moi ha'))
    return (
        <div className='dashboard-board'>
            <h2>{utilService.getCapitalizedName(user.fullname)}'s workspace</h2>
            <div className={`upper-container ${currWap?.isPublished? 'published' : 'unpublished'}`}>


                <div className='dashboard-data-container'>
                    {currWap ? <div>
                        {!currWap.isPublished && < div className='unpublished-site-container'>
                            <div className='dashboard-board-header'>
                                <img src={currWap.imgUrl} />
                                <div className='flex published-msg tomato'>
                                    <ErrorIcon />
                                    <span>This website isn't published yet</span>
                                </div>
                                <div className='btn-container'>
                                    <PublishModal currWap={currWap} />
                                    <button className='edit-btn' onClick={onWebsiteClick}>Website</button>
                                    <button className='edit-btn' onClick={() => navigate(`/editor/:${currWap._id}`)}>Edit</button>
                                </div>
                            </div>
                        </div>}

                        {currWap.isPublished && < div className='site-preview-container'>
                            <div className='dashboard-board-header'>
                                <img src={currWap.imgUrl} />


                            </div>
                        </div>}
                            

                    </div> : <div>
                        <span>No wap to view</span>
                    </div>}
                </div>

                {currWap?.isPublished && <div className='published-site-container'>
                    <div className='second-container'>
                        <div className='btn-container'>
                            <button className='publish-btn' onClick={onWebsiteClick}>Website</button>
                            <button className='edit-btn' onClick={() => navigate(`/editor/:${currWap._id}`)}>Edit</button>
                        </div>

                        <div className='cards-container'>
                            <div className='total-subscribers details-container'>
                                <div className='dashboard-icon-container'>
                                    <SupervisedUserCircleIcon style={{}} />
                                </div>
                                <div className='text'>
                                    <span>Total subscribers: </span>
                                    <span>{getDatasetSum(subsData)*1.2}</span>
                                </div>
                            </div>
                            <div className='total-views details-container'>
                                <div className='dashboard-icon-container'>
                                    <PreviewIcon />
                                </div>
                                <div className='text'>
                                    <span>Total site views: </span>
                                    <span>{getDatasetSum(viewsData)*2}</span>
                                </div>
                            </div>
                            <div className='creates-at details-container'>
                                <div className='dashboard-icon-container'>
                                    <EventIcon />
                                </div>
                                <div className='text'>
                                    <span>Creation date: </span>
                                    <span>{utilService.getFormattedDate(currWap.createdAt)}</span>
                                </div>
                            </div>
                            <div className='creates-at details-container'>
                                <div className='dashboard-icon-container'>
                                    <BrowserUpdatedIcon />
                                </div>
                                <div className='text'>
                                    <span>Latest update </span>
                                    <span>{utilService.timeSince(currWap.updatedAt)} ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

            </div>
                {currWap?.isPublished && <div className='flex justify-center published-msg success'>
                                    <CheckCircleIcon />
                                    <span>"{currWap.name}" is published and available on the web!</span>
                                </div>}
                {currWap?.isPublished && <div className='flex column' >
                    <div className="views-graph">
                        <Line style={{ height: '320px', marginTop: '0' }} options={viewsOpts} data={viewsData} />
                    </div>
                    <div className="subs-graph">
                        <Line style={{ height: '320px', marginTop: '0' }} options={subsOpts} data={subsData} />
                    </div>
                </div>}


        </div >)

}