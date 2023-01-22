import React from 'react'
import { Link } from 'react-router-dom'
import { AppHeader } from '../cmps/app-header'


export function Drafts() {


    return (
        <div>
            <AppHeader/>
            <h2>this is home page</h2>
            <Link to="/WapDemos">
                <button>Get Started</button>
            </Link>
        </div >
    )
}