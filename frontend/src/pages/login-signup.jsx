
// import { AppHeader } from '../cmps/app-header'
import { LoginHeader } from '../cmps/login/login-header.jsx'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { userService } from '../services/user.service.js'
import { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { signup, login, logout } from '../store/user.actions.js'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'
import jwt_decode from "jwt-decode";
import axios from 'axios'


export function LoginSignup() {

    const [credentails, setCredentials] = useState(userService.getEmptyCredentials())
    const [isSignupState, setIsSignupState] = useState(false)
    const user = useSelector((storeState => storeState.userModule.user))
    const navigate = useNavigate()


    function handleChange({ target }) {
        let { value, name: field } = target
        setCredentials((prevCreds) => ({ ...prevCreds, [field]: value }))
    }

    function onSubmit(ev) {
        ev.preventDefault()
        const funcs = { signup, login }
        const method = isSignupState ? 'signup' : 'login'
        return funcs[method](credentails)
            .then((user) => {
                showSuccessMsg(`Welcome ${user.fullname}`)
                navigate('/')
            })
            .catch(() => showErrorMsg('Oops try again'))
    }

    function onToggleSignupState(ev) {
        ev.preventDefault()
        setIsSignupState(!isSignupState)
    }

    function onLogout() {
        logout()
        userService.logout()
    }

    const googleLogin = useGoogleLogin({
        onSuccess: async respose => {
            try {
                const userData = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${respose.access_token}`
                    }
                })
                console.log('data= ', userData.data)
            } catch (err) {
                console.log(err)
            }
        }
    });

    const { fullname, username, password } = credentails

    return (
        <div>
            <LoginHeader />
            <section className="login-signup">

                {!user && <div className='login-container'>
                    <h2 className='login-title'>{isSignupState ? "Sign Up" : "Log In"}</h2>
                    <p className='login-subtitle'>{isSignupState ? "Already a member?" : "Don't have an account?"} <span className="signup-link" onClick={onToggleSignupState}>{isSignupState ? "Log In" : "Sign Up"}</span></p>

                    <form form className='login-signup-form' onSubmit={onSubmit}>
                        <div className='form-container'>
                            <div className='txt-field'>
                                <input type="text"
                                    id='username'
                                    name="username"
                                    // className='login-input'
                                    placeholder="User name.."
                                    value={username}
                                    onChange={handleChange} />

                            </div>
                            <div>
                                <input type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handleChange} />
                            </div>
                            {isSignupState && <Fragment>
                                <div>
                                    <input type="text"
                                        id="fullname"
                                        name="fullname"
                                        placeholder="Full name.."
                                        value={fullname}
                                        onChange={handleChange} />
                                </div>
                            </Fragment>
                            }
                            <button className="login-signup-btn">{isSignupState ? "Sign up" : "Login"}</button>
                        </div>


                        <div className='middle-line-login-container'>
                            <div className='middle-line-login'></div>
                            <div>or</div>
                            <div className='middle-line-login'></div>
                        </div>


                        <div className='login-by-container'>
                            {/* <GoogleLogin
                                onSuccess={credentialResponse => {
                                    console.log(credentialResponse);
                                    var decoded = jwt_decode(credentialResponse.credential);
                                    console.log(decoded)
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }} /> */}
                            <div className='google-login' onClick={googleLogin}>
                                <img src="https://res.cloudinary.com/dimirmc9j/image/upload/v1674739590/icons8-google-48_serqxw.png" alt="" />
                                <span className='google-login-txt'>Continue with Google</span>
                            </div>
                            <div className='facebook-login' onClick={googleLogin}>
                                <img src="https://res.cloudinary.com/dimirmc9j/image/upload/v1674740800/facebook-svgrepo-com_sxcc4q.svg" alt="" />
                            <span className='facebook-login-txt'>Continue with Facebook</span>
                            </div>
                        </div>
                    </form>
                </div>}
                {user && <div className="user-profile">
                    <h2 className="user-greeting">Hello {user.fullname}</h2>
                    <h3 style={{ color: 'red' }}>This is gonna be a draft page</h3>
                    <button className="logout-btn" onClick={onLogout}>Logout</button>
                </div>}
            </section >
        </div >
    )

}