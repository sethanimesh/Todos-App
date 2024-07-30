import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp(){
    return (
        <>
            <LoginComponent/>
        </>
    )
}

function LoginComponent(){
    
    const[username, setUsername] = useState('sethanimesh')
    const[password, setPassword] = useState('')

    const[showSuccesssMessage, setSuccessMessage] = useState(false)
    const[showErrorMessage, setErrorMessage] = useState(false)

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if ((username==="sethanimesh") && (password==="dummy")){
            setSuccessMessage(true)
            setErrorMessage(false)
        }
        else{
            setSuccessMessage(false)
            setErrorMessage(true)
        }
    }

    function SuccessMessageComponent(){
        if (showSuccesssMessage){
            return (
                <div className='successMessage'>Authenticated Successfully</div>
            )
        }
        return null
    }

    function ErrorMessageComponent(){
        if (showErrorMessage){
            return (
                <div className="errorMessage">Authentication Failed</div>
            )
        }
        return null
    }

    return (
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <SuccessMessageComponent/>
                    <ErrorMessageComponent/>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

