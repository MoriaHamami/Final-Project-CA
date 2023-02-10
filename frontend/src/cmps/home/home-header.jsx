import { Link, NavLink } from 'react-router-dom'
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
import { userService } from '../../services/user.service.js'
import { logout } from '../../store/user.actions.js'



export function HomeHeader() {
    const user = useSelector(storeState => storeState.userModule.user)
    console.log(user)

    function onLogout() {
        logout()
        userService.logout()
    }

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



    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <header className={`home-header ${isDown ? 'header-down' : ''}`}>
            <div className="header-txt-container">
                <nav>
                    <div className="pages-container">
                        <Link className="logo" key="/" to="/">webix</Link>
                    </div>
                    {user ? <Link className="header-profile-container">
                        {/* <span className="material-symbols-outlined profile-img">account_circle</span> */}
                        {/* <img className='user-img' src={user.imgUrl} /> */}
                        <React.Fragment sx={{ overflowY: 'scroll' }}>
                            <Box>
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 1, padding: '2px', color: `${(isDown) ? 'black' : 'white'}` }}
                                        aria-controls={open ? "account-menu" : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? "true" : undefined}
                                    >
                                        <span className="user-name" style={{ fontSize: '0.9rem' }}>{user.fullname}</span>
                                        <span class="material-symbols-outlined">expand_more</span>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: "visible",
                                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                        mt: 1.5,
                                        "& .MuiAvatar-root": {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1
                                        },
                                        "&:before": {
                                            content: '""',
                                            display: "block",
                                            position: "absolute",
                                            top: 0,
                                            right: 50,
                                            width: 10,
                                            height: 10,
                                            bgcolor: "background.paper",
                                            transform: "translateY(-50%) rotate(45deg)",
                                            zIndex: 0
                                        }
                                    }
                                }}
                                transformOrigin={{ horizontal: "right", vertical: "top" }}
                                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link to="/dashboard">
                                        <ListItemIcon>
                                            <DashboardIcon fontSize="small" />
                                        </ListItemIcon>
                                        Dashboard
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={() => {
                                    handleClose()
                                    onLogout()
                                }}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </React.Fragment>

                    </Link> :
                        <div className="login-container">
                            <NavLink className="login-btn" key="/login" to="/user/false">Log in</NavLink>
                            <NavLink className="signup-btn" key="/signup" to="/user/true">Sign Up</NavLink>
                        </div>
                    }
                </nav>
            </div>
        </header >
    )
}
