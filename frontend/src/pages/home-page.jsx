import { HomeHero } from '../cmps/home/home-hero.jsx'
import { HomeHeader } from '../cmps/home/home-header.jsx'
import React from 'react'


export function HomePage() {

    return <main className='home-page'>
        <HomeHeader />
        <HomeHero />
    </main>

}