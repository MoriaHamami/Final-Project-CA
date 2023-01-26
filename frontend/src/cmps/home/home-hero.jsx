import { Link } from 'react-router-dom'
import { HomeHeader } from './home-header.jsx'


export function HomeHero() {

    return (
        <div className='hero-container'>
            <HomeHeader />
        <section className="home-page-hero">
            <div className='intro-container'>
            <h1 className='hero-title'>Turning ideas into <span>Websites</span></h1>
            <p className='hero-txt'>Unleash your creativity and build your own website with ease</p>
            
            <Link to="/WapDemos">
                <button className='hero-btn'>Create New Site</button>
            </Link>
            </div>
            <div className='img-container'>
                <img className='demo-hero' src="https://res.cloudinary.com/dimirmc9j/image/upload/v1674716461/%D7%92%D7%9B%D7%A2%D7%99%D7%97%D7%98%D7%90%D7%A8%D7%92_hkjvg4.png" alt="" />
                <img className='demo-template' src="https://res.cloudinary.com/dimirmc9j/image/upload/v1674716456/%D7%92%D7%9B%D7%A2%D7%99%D7%97%D7%9C%D7%9F%D7%95%D7%98%D7%90%D7%A8%D7%9B%D7%A2%D7%99_hwjqgt.png" alt="" />
            </div>
        </section >
        <svg className="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,250.7C384,256,480,224,576,197.3C672,171,768,149,864,165.3C960,181,1056,235,1152,261.3C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path></svg>
        </div>

    )
}
