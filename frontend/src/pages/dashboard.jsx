import React from 'react'
import { Link } from 'react-router-dom'
import { AppHeader } from '../cmps/app-header'
import { DashboardSidebar } from '../cmps/dashboard/dashboard-sidebar.jsx'
import { DashboardBoard } from '../cmps/dashboard/dashboard-board.jsx'
import { wapService } from '../services/wap.service'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'


export function Dashboard() {
    const user = useSelector((storeState => storeState.userModule.user))
    const [userPublishedWaps, setUserPublishedWaps] = useState([])
    const [userDraftWaps, setUserDraftWaps] = useState([])
    const [currWap, setCurrWap] = useState(null)

    useEffect(() => {
        loadUserWaps()
    }, [])

    async function loadUserWaps() {
        try {
            const allWaps = await wapService.query()
            const userWaps = allWaps.filter((wap) => {
                return (!wap.isDemo && wap.createdBy === user.username)
            })
            setUserPublishedWaps(userWaps.filter(wap => wap.isPublished))
            setUserDraftWaps(userWaps.filter(wap => !wap.isPublished))
        } catch (err) {
            console.error(err)
        }
    }

    function selectCurrWap(wap) {
        setCurrWap(wap)
    }

    console.log('currWap:', currWap)




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