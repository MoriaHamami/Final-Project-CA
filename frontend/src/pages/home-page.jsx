import { HomeHero } from '../cmps/home/home-hero.jsx'
import { HomePreview } from '../cmps/home/home-preview.jsx'

import React from 'react'


export function HomePage() {

    return <main className='home-page'>
        <HomeHero />
        <HomePreview />
    </main>

}