import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


export function HomeHeader() {
    const user = useSelector(storeState => storeState.userModule.user)

    return (
        <header className="home-header">
            <div className="header-txt-container">
                <nav>
                    <div className="pages-container">
                        <Link className="logo" key="/" to="/">webix</Link>
                    </div>
                    {user ? <Link to="/user" className="header-profile-container">
                        <span className="material-symbols-outlined profile-img">account_circle</span>
                        <span className="user-name">{user.fullname}</span>
                    </Link> : <NavLink className="login-btn" key="/user" to="/user">Login</NavLink>}
                </nav>
            </div>
        </header >
    )
}
