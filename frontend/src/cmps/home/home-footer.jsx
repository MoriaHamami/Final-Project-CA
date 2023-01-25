import React from 'react'
import { Link } from 'react-router-dom'



export function HomeFooter() {

    return <div className='home-footer'>
        {/* <div className='footer-shadow-container-1'></div>
        <div className='footer-shadow-container-2'></div>
        <div className='footer-shadow-container-3'></div> */}
        <div className='footer-container'>
            <h2 className='home-footer-title'>Build your <span>unique</span> online website Now</h2>
            <h4 className='home-footer-subtitle'>To create your own website, follow these steps </h4>
            <div className='steps-container'>
                <div className='step-container'>
                    <h2>
                        Customize your site
                    </h2>
                    <p>
                        Pick a template and customize anything, from the theme and the sections of your site to the smallest changes you wish for to fullfill your needs.
                    </p>
                </div>
                <div className='step-container'>
                    <h2>
                        Check your site and Publish
                    </h2>
                    <p>
                        Check your site in mobile and tablet with our helpers tools, and when your done just enter your domain and publish!
                    </p>
                </div>
            </div>

                
                <button className='footer-btn'><Link to="/WapDemos">Start now</Link></button>
            
        </div>
    </div>

}