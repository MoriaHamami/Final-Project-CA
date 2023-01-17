import { Link, NavLink } from 'react-router-dom'
import {useSelector} from 'react-redux'
import routes from '../routes'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.user)

    return (
        <header className="app-header">
            <h1 className='logo'>My App</h1>
            <Link to="/user"><div className='header-profile-container'><span className="material-symbols-outlined profile-img">account_circle</span>
                {user ? <h4 className='username-header'>{user.fullname}</h4> : <h4 className='username-header'>Login</h4>  }</div></Link>
            <nav>
                {/* {routes.map(route => <NavLink key={route.path} to={route.path}>{route.label}</NavLink>)} */}
                <NavLink to="/">Home</NavLink>
                
            </nav>
        </header>
    )
}
