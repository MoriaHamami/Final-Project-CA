import { Link } from 'react-router-dom'


export function HomeHero() {

    return (
        <section className="home-page-hero">
                <h1 className='hero-title'>The best <span>fucking</span> way to build your personal site</h1>
                <p className='hero-txt'>You're on your way to creating your first professional website.</p>
                <Link to="/WapDemos">
                    <button className='hero-btn'>Create New Site</button>
                </Link>
        </section >

    )
}
