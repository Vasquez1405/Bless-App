import { useNavigate } from "react-router-dom"

import '../../styles/Login.css'

export const LoginPage = () => {

    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/', {
            replace: true
        })
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <hr />

            <button className='btn btn-primary' onClick={onLogin}>
                Login
            </button>
        </div>
    )
}
