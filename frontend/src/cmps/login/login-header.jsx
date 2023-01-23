import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";


export function LoginHeader() {
    const user = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()

    function onGoBack(){
        navigate(-1)
    }

    return (
        <header className="login-header">
            <div className="header-txt-container">
                <nav>
                    <div className="pages-container">
                        <Link className="logo" key="/" to="/">webix</Link>
                    </div>

                    <span onClick={onGoBack} class="login-close material-symbols-outlined">close</span>
                </nav>
            </div>
        </header >
    )
}
