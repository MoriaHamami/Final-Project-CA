import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Logout from "@mui/icons-material/Logout";
import { userService } from '../services/user.service.js'
import { logout } from '../store/user.actions.js'
import { utilService } from '../services/util.service.js';


export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()

    function onLogout() {
        logout()
        navigate('/')
        userService.logout()
    }

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }



    return (
        <header className="app-header">
            {/* <div className="header-txt-container"> */}
            <Link className="logo" key="/" to="/">webix</Link>
            <nav>
                <ul>
                    <li className="pages-container">
                        <NavLink key="/WapDemos" to="/WapDemos" className="templates list-item">Templates</NavLink>
                        {user && <NavLink key="/dashboard" to="/dashboard" className="list-item">Dashboard</NavLink>}
                    </li>
                    {user && <li className="header-profile-container list-item">
                        {user.imgUrl && <img className="user-img" src={user.imgUrl} />}
                        {!user.imgUrl && <span className="user-name">{user.fullname}</span>}
                        <span onClick={() => {
                            handleClose()
                            onLogout()
                        }}>Logout</span>
                    </li>}
                    {!user && <li><NavLink className="header-profile-container" key="/login" to="/user/false">Login</NavLink></li>}
                </ul>
            </nav>
            <span className="material-symbols-outlined menu-btn" onClick={utilService.toggleMenu}>menu</span>
            {/* </div> */}
        </header >
    )
    {/* // return (
    //     <header className="app-header">
    //         <div className="header-txt-container">
    //             <Link className="logo" key="/" to="/">webix</Link>
    //             <nav>
    //                 <div className="pages-container">
    //                     <NavLink key="/WapDemos" to="/WapDemos" className="margin-inline-start templates">Templates</NavLink>
    //                     {user && <NavLink key="/dashboard" to="/dashboard" className="margin-inline-start">Dashboard</NavLink>}
    //                 </div>
    //                 <span className="material-symbols-outlined menu-btn" onClick={utilService.toggleMenu}>menu</span>
    //                 {user ? <Link className="header-profile-container">
    //                     {user.imgUrl && <img className="user-img" src={user.imgUrl} />}
    //                     {!user.imgUrl && <span className="user-name">{user.fullname}</span>}
    //                     <div onClick={() => {
    //                         handleClose()
    //                         onLogout()
    //                     }}>Logout</div> */}
    {/* <React.Fragment sx={{ overflowY: 'scroll' }}>
    //                         <Box>
    //                             <Tooltip title="Account settings">
    //                                 <IconButton
    //                                     onClick={handleClick}
    //                                     size="small"
    //                                     sx={{ ml: 1, padding: '2px', color: `black` }}
    //                                     aria-controls={open ? "account-menu" : undefined}
    //                                     aria-haspopup="true"
    //                                     aria-expanded={open ? "true" : undefined}
    //                                 >
    //                                     {user.imgUrl && <img className='user-img' src={user.imgUrl} />}
    //                                     {!user.imgUrl && <span className="user-name">{user.fullname}</span>}
    //                                 </IconButton>
    //                             </Tooltip>
    //                         </Box>
    //                         <Menu
    //                             anchorEl={anchorEl}
    //                             id="account-menu"
    //                             open={open}
    //                             onClose={handleClose}
    //                             onClick={handleClose}
    //                             PaperProps={{
    //                                 elevation: 0,
    //                                 sx: {
    //                                     overflow: "visible",
    //                                     filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    //                                     mt: 1.5,
    //                                     "& .MuiAvatar-root": {
    //                                         width: 32,
    //                                         height: 32,
    //                                         ml: -0.5,
    //                                         mr: 1
    //                                     },
    //                                     "&:before": {
    //                                         content: '""',
    //                                         display: "block",
    //                                         position: "absolute",
    //                                         top: 0,
    //                                         right: 50,
    //                                         width: 10,
    //                                         height: 10,
    //                                         bgcolor: "background.paper",
    //                                         transform: "translateY(-50%) rotate(45deg)",
    //                                         zIndex: 0
    //                                     }
    //                                 }
    //                             }}
    //                             transformOrigin={{ horizontal: "right", vertical: "top" }}
    //                             anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    //                         >
    //                             <MenuItem onClick={handleClose}>
    //                                 <Link to="/dashboard">
    //                                     <ListItemIcon>
    //                                         <DashboardIcon fontSize="small" />
    //                                     </ListItemIcon>
    //                                     Dashboard
    //                                 </Link>
    //                             </MenuItem>
    //                             <MenuItem onClick={() => {
    //                                 handleClose()
    //                                 onLogout()
    //                             }}>
    //                                 <ListItemIcon>
    //                                     <Logout fontSize="small" />
    //                                 </ListItemIcon>
    //                                 Logout
    //                             </MenuItem>
    //                         </Menu>
    //                     </React.Fragment> */}
    {/* <span className="material-symbols-outlined profile-img">account_circle</span> */ }

    {/* //                 </Link> : <NavLink className="header-profile-container" key="/login" to="/user/false">Login</NavLink>} */ }
    {/* </nav> */ }
    {/* //         </div> */ }
    {/* //     </header > */ }
    {/* // ) */ }
}
