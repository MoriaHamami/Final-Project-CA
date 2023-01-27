import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'


export function HomeHeader() {
    const user = useSelector(storeState => storeState.userModule.user)
    console.log(user)

    const [isDown, setIsDown] = useState(false)

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setIsDown(true);
        }
        else {
            setIsDown(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <header className={`home-header ${isDown ? 'header-down' : ''}`}>
            <div className="header-txt-container">
                <nav>
                    <div className="pages-container">
                        <Link className="logo" key="/" to="/">webix</Link>
                    </div>
                    {user ? <Link to="/user" className="header-profile-container">
                        {/* <span className="material-symbols-outlined profile-img">account_circle</span> */}
                        {/* <img className='user-img' src={user.imgUrl} /> */}
                        <span className="user-name">{user.fullname}</span>
                    </Link> :
                        <NavLink className='login-container' key="/user" to="/user">
                            <span className="login-btn">Log in</span>
                            <span className="signup-btn">Sign Up</span>
                        </NavLink>
                    }
                </nav>
            </div>
        </header >
    )
}
