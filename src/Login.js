import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

const Login = () => {
    const signIn = () => {

        auth.signInWithPopup(provider).catch((err) => alert(err.message))
    }
    return (
        <div className='login' >
            <div className="login__logo">
                <img src="" alt="discord logo" />
            </div>

            <Button onClick={signIn}>Log In</Button>
        </div>
    )
}

export default Login
