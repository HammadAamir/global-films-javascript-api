import {useEffect, useState} from 'react'
import LoginForm from '../components/LoginForm'

const Login = ({setLoginUser}) => {

    return (
        <div className="films-create">
            <LoginForm setLoginUser={setLoginUser}/> 
        </div>
    )
}

export default Login