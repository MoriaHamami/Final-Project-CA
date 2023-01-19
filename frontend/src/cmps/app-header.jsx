import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.user)

    return (
        <header className="app-header">
            <div className='header-txt-container'>
                <Link className='logo' key='/' to='/'>webix</Link>
                <nav>
                    <div className='pages-container'>
                        <NavLink key='/WapDemos' to='/WapDemos'>Templates</NavLink>
                        {user && <NavLink key='/drafts' to='/drafts'>Drafts</NavLink>}
                    </div>
                    {user ? <Link to="/user" className='header-profile-container'>
                        |
                        <span className="material-symbols-outlined profile-img">account_circle</span>
                        <span className='user-name'>{user.fullname}</span>
                    </Link> : <NavLink className='header-profile-container' key='/user' to='/user'>Login</NavLink>}
                </nav>
            </div>
        </header >
    )
}
