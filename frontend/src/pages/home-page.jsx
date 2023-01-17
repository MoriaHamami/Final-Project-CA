import React from 'react'
import { Link } from 'react-router-dom'


export function HomePage() {


    return (
        <section>
            <h2>this is home page</h2>
            <span>asfwegfsdvsfgdsf</span>
            <Link to="/templates">
                <button>Get Started</button>
            </Link>
        </section >
    )
}