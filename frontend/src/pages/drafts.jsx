import React from 'react'
import { Link } from 'react-router-dom'


export function Drafts() {


    return (
        <section>
            <h2>this is home page</h2>
            <Link to="/templates">
                <button>Get Started</button>
            </Link>
        </section >
    )
}