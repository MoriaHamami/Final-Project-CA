import React from 'react'
import { Link } from 'react-router-dom'
import { wapService } from '../../services/wap.service'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'


export function DashboardSidebar({userDraftWaps, userPublishedWaps, selectCurrWap}) {
    
    return (
        <div> 
           {userPublishedWaps && <div>
            <h2>Published waps</h2>
            {userPublishedWaps.map((wap) => {
                return <div onClick={() => selectCurrWap(wap)}>{wap.name}</div>
            })}
            
           </div>}
           {userDraftWaps && <div>
            <h2>Draft waps</h2>
            {userDraftWaps.map((wap) => {
                return <div onClick={() => selectCurrWap(wap)}>{wap.name}</div>
            })}
            
           </div>}

        </div >
    )
}