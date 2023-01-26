import React from 'react'
import { Link } from 'react-router-dom'
import { AppHeader } from '../cmps/app-header'
import { wapService } from '../services/wap.service'


export function Dashboard() {

    getDraft()
    async function getDraft() {
        const draft = await wapService.query()
        console.log(draft)
    }



    return (
        <div>
            <AppHeader />
            <h2>this is home page</h2>
            <Link to="/WapDemos">
                <button>Get Started</button>
            </Link>
        </div >
    )
}