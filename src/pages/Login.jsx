import React from 'react'
import {UseAuth} from '../auth/UseAuth'
import  {useHistory, useLocation} from 'react-router-dom'

export const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const previousObjectURL = location.state?.from;
    const auth = UseAuth();

    const handleLogin = () =>{
        auth.login();
        history.push(previousObjectURL || "/")
    }

    return (
        <div>
            <h1>Página Login</h1>
            <button onClick={handleLogin}>
                Signin
            </button>
        </div>
    )
}
