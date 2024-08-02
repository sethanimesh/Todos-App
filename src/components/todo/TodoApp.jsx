import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent/>}></Route>
                    <Route path="/login" element={<LoginComponent/>}></Route>
                    <Route path="/welcome/:username" element={<WelcomeComponent/>}></Route>
                    <Route path="*" element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

function LoginComponent(){
    
    const[username, setUsername] = useState('sethanimesh')
    const[password, setPassword] = useState('')

    const[showSuccesssMessage, setSuccessMessage] = useState(false)
    const[showErrorMessage, setErrorMessage] = useState(false)

    const navigate = useNavigate();

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if ((username==="sethanimesh") && (password==="dummy")){
            navigate(`/welcome/${username}`)
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

function WelcomeComponent(){
    const {username} = useParams();

    return (
        <div className='welcome'>
            <h1>Welcome in {username}</h1>
            Welcome Component
        </div>
    )
}

function ErrorComponent(){
    return (
        <div className='ErrorComponent'>
            <h1>We are working really hard !</h1>
            <div>
                Apologies for the 404 Error.
            </div>
        </div>
    )
}