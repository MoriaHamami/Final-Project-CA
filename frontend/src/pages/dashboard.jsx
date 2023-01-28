import React from 'react'
import { Link } from 'react-router-dom'
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
        } catch (err) {
            console.error(err)
        }
    }

    function selectCurrWap(wap) {
        setCurrWap(wap)
    }

    // console.log('currWap:', currWap)



if(!user) return <Loader />


    return (
        <div>
            <AppHeader />
            <div className='dashboard'>
                <DashboardSidebar userPublishedWaps={userPublishedWaps} userDraftWaps={userDraftWaps} selectCurrWap={selectCurrWap} />
                <DashboardBoard currWap={currWap} />
            </div>
        </div >
    )
}