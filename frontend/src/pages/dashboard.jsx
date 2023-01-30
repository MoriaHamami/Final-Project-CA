import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppHeader } from '../cmps/app-header'
import { DashboardSidebar } from '../cmps/dashboard/dashboard-sidebar.jsx'
import { DashboardBoard } from '../cmps/dashboard/dashboard-board.jsx'
import { wapService } from '../services/wap.service'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { loadUserWaps } from '../store/wap.actions'
import { Loader } from './loader'


export function Dashboard() {
    const user = useSelector((storeState => storeState.userModule.user))
    const [userPublishedWaps, setUserPublishedWaps] = useState([])
    const [userDraftWaps, setUserDraftWaps] = useState([])
    const [currWap, setCurrWap] = useState(null)

    useEffect(() => {
        loadWaps()
    }, [])

    async function loadWaps() {
        try {
            // const allWaps = await wapService.query()
            // const userWaps = allWaps.filter((wap) => {
            //     return (!wap.isDemo && wap.createdBy === user.username)
            // })
            const filterBy = { username: user.username }
            const userWaps = await wapService.query(filterBy)
            // const userWaps = await loadUserWaps(user.username)
            // console.log('userWaps:', userWaps)
            setUserPublishedWaps(userWaps.filter(wap => wap.isPublished))
            setUserDraftWaps(userWaps.filter(wap => !wap.isPublished))
            if (userWaps) setCurrWap(userWaps[0])
        } catch (err) {
            console.error(err)
        }
    }

    function selectCurrWap(wap) {
        setCurrWap(wap)
    }

    // TAKEN FROM BOARD DASHBOARD /////////////////////

    // const user = useSelector((storeState => storeState.userModule.user))
    // const navigate = useNavigate()

    // function onWebsiteClick() {
    //     navigate(`/${currWap.name}`)
    // }

    // const labels = ['20/01', '21/01', '22/01', '23/01', '24/01', '25/01', '26/01','27/01', '28/01', '29/01', '30/01','31/01'];

    // const options = {
    //     responsive: true,
    //     plugins: {
    //         legend: {
    //             position: 'top',
    //         },
    //         title: {
    //             display: true,
    //             text: 'Views per day',
    //         },
    //     },
    // }

    // const data = {
    //     labels,
    //     datasets: [
    //         {
    //             label: 'number of views',
    //             data: labels.map(() => utilService.getRandomIntInclusive(0,20)),
    //             borderColor: '#3899ec',
    //             backgroundColor: '#3899ec',
    //         },
    //     ],
    // }

    if (!user) return <Loader />


    return (
        <div>
            <AppHeader />
            <div className="dashboard">
                <div className="sites-list">
                    <h3>My websites</h3>
                    <div className="title">Published</div>
                    {userPublishedWaps && userPublishedWaps.map((wap, idx) => {
                        return <div className={currWap._id === wap._id ? 'active' : ''} key={idx} onClick={() => selectCurrWap(wap)}>{wap.name}</div>
                    })}
                    <div className="title">Edited</div>
                    {userDraftWaps && userDraftWaps.map((wap, idx) => {
                        return <div className={currWap._id === wap._id ? 'active' : ''} key={idx} onClick={() => selectCurrWap(wap)}>{wap.name}</div>
                    })}
                </div>
                {/* <DashboardSidebar userPublishedWaps={userPublishedWaps} userDraftWaps={userDraftWaps} selectCurrWap={selectCurrWap} /> */}
                <DashboardBoard currWap={currWap} />
                {/* <div className="data-list">

                </div> */}

            </div>
        </div >
    )
}