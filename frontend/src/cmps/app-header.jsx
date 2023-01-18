import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import routes from '../routes'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.user)

    return (
        <header className="app-header">
            <div className='header-txt-container'>
                <Link className='logo' key='/' to='/'>webix</Link>
                <nav>
                    {/* {routes.map(route => {
                    if (route.label === 'Editor' || route.label === 'Login') return
                    else return <NavLink key={route.path} to={route.path}>{route.label}</NavLink>
                })} */}
                    <NavLink key='/templates' to='/templates'>Templates</NavLink>
                    <Link to="/user" className='header-profile-container'>
                        |
                        <span className="material-symbols-outlined profile-img">account_circle</span>
                        {user ? <span className='user-name'>{user.fullname}</span> : <NavLink key='/user' to='/user'>Login</NavLink>}
                    </Link>
                </nav>
            </div>
        </header >
    )
}
