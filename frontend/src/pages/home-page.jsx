import React from 'react'
import { Link } from 'react-router-dom'


export function HomePage() {

    return (
        <section className="home-page">
            <img src="" />
            <h1>Create your first site</h1>
            <h4>You're on your way to creating your first professional website.</h4>
            <Link to="/WapDemos">
                <button>Create New Site</button>
            </Link>
        </section >
    )
}