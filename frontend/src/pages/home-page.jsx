import React from 'react'
import { Link } from 'react-router-dom'


export function HomePage() {


    return (
        <section>
            <h2>this is home page</h2>
            <Link to="/WapDemos">
                <button>Get Started</button>
            </Link>
        </section >
    )
}