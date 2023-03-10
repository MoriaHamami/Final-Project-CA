import React from 'react'
import { Routes, Route } from 'react-router'
import "swiper/css/bundle";

import routes from './routes'
import { utilService } from './services/util.service';

// import { AppHeader } from './cmps/app-header'
// import { AppFooter } from './cmps/app-footer'
// import { UserDetails } from './pages/user-details'

export function RootCmp() {

    return (
        <div className="app">
            {/* <AppHeader/> */}
            <div className="main-screen" onClick={utilService.toggleMenu}></div>
            
            <main className='app-main-container'>
                <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                    {/* <Route path="user/:id" element={<UserDetails />} /> */}
                </Routes>
            </main>
            {/* <AppFooter /> */}
        </div>
    )
}


