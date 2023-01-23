import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.user)

    return (
        <header className="app-header">
            <div className="header-txt-container">
                <nav>
                    <div className="pages-container">
                        <Link className="logo" key="/" to="/">webix</Link>
                        <NavLink key="/WapDemos" to="/WapDemos" className="margin-inline-start">Templates</NavLink>
                        {user && <NavLink key="/drafts" to="/drafts" className="margin-inline-start">Drafts</NavLink>}
                    </div>
                    {user ? <Link to="/user" className="header-profile-container">
                        <span className="material-symbols-outlined profile-img">account_circle</span>
                        <span className="user-name">{user.fullname}</span>
                    </Link> : <NavLink className="header-profile-container" key="/user" to="/user">Login</NavLink>}
                </nav>
            </div>
        </header >
    )
}
