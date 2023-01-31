import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { wapService } from '../../services/wap.service'
// import { utilService } from '../../services/util.service'
import { socketService, SOCKET_EVENT_UPDATE_SITE_VIEWS, SOCKET_EMIT_SET_SITE, SOCKET_EVENT_SEND_WAP } from '../../services/socket.service'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { saveWap, setDisplaySize } from '../../store/wap.actions';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import EventIcon from '@mui/icons-material/Event'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PreviewIcon from '@mui/icons-material/Preview'
import ErrorIcon from '@mui/icons-material/Error';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import { PublishModal } from '../publish-modal'
import { utilService } from '../../services/util.service'

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
    const [viewsStats, setViewsStats] = useState([2, 6, 4, 9, 13, 15, 19, 7, 14, 21, 27, 31])

    useEffect(() => {
        if (!currWap) return
        socketService.on(SOCKET_EVENT_SEND_WAP, (res) => {
            onAddedView()
        })
        // socketService.emit(SOCKET_EMIT_SET_SITE, currWap._id)
        // socketService.on(SOCKET_EVENT_UPDATE_SITE_VIEWS, onAddedView)

        // return () => {
        //     socketService.off(SOCKET_EVENT_UPDATE_SITE_VIEWS, onAddedView)

        // }

    }, [])

    function onWebsiteClick() {
        navigate(`/${currWap.name}`)
    }

    function onPreviewClick() {
        navigate(`/preview/${currWap._id}`)
    }

    function onAddedView(value) {
        console.log('value:', value)
        console.log('here');
        setViewsStats((prevState) => {
            console.log(' prevState[prevState.length - 1]:', prevState[prevState.length - 1])
            prevState[prevState.length - 1] += 1
            return prevState
        })
    }

    function getViewsSum() {
        return viewsStats.reduce((acc, views, index) => {
            if (index === viewsStats.length - 1) return acc
            return acc += views

        }, 0)
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
                data: viewsStats,
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
                data: [0, 1, 1, 3, 4, 6, 8, 11, 12, 14, 16, 17],
                borderColor: '#3899ec',
                backgroundColor: '#3899ec',
            },
        ],
    }

    function getDatasetSum(dataset) {
        const datasetSum = dataset.datasets[0].data.reduce((acc, data) => {
            acc += data
            return acc
        }, 0)

        return Math.ceil(datasetSum)
    }

    // console.log( utilService.getCapitalizedName('moi ha'))
    return (
        <div className='dashboard-board'>
            <h2>{utilService.getCapitalizedName(user.fullname)}'s workspace</h2>
            <div className={`upper-container ${currWap?.isPublished ? 'published' : 'unpublished'}`}>


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
                                    <button className='edit-btn' onClick={onPreviewClick}>Preview</button>
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
                                    <span>17</span>
                                </div>
                            </div>
                            <div className='total-views details-container'>
                                <div className='dashboard-icon-container'>
                                    <PreviewIcon />
                                </div>
                                <div className='text'>
                                    <span>Total site views: </span>
                                    {/* <span>{getDatasetSum(currWap.viewsCount)*2}</span> */}
                                    <span>{currWap.viewsCount + 168}</span>
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