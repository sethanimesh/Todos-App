import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp(){
    return (
        <>
            <HeaderComponent/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent/>}></Route>
                    <Route path="/login" element={<LoginComponent/>}></Route>
                    <Route path="/welcome/:username" element={<WelcomeComponent/>}></Route>
                    <Route path="/listtodos" element={<ListTodosComponent/>}/>
                    <Route path="/logout" element={<LogoutComponent/>}/>
                    
                    <Route path="*" element={<ErrorComponent/>}></Route>
                    
                </Routes>
            </BrowserRouter>
            <FooterComponent/>
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
            To access Your Todos - <Link to="/listtodos">Click Here!</Link>
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

function ListTodosComponent(){

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDate())

    const todos = [
        {id:1, description:"Learn AWS", isdone:false, targetDate:targetDate},
        {id:2, description:"Learn DevOps", isdone:false, targetDate:targetDate},
        {id:3, description:"Learn Full Stack Ops", isdone:false, targetDate:targetDate}
    ]

    return (
        <div className="container">
            <h1>Things to do</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DESCRIPTION</th>
                            <th>IS DONE?</th>
                            <th>TARGET DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo=>(
                                <tr key={todo.id}> 
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.isdone.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function HeaderComponent(){
    return (
        <div className='headerComponent'>
            Header <hr/>
        </div>
    )
}

function FooterComponent(){
    return (
        <div className='footerComponent'>
            Footer<hr/>
        </div>
    )
}

function LogoutComponent(){
    return (
        <div className='logoutComponent'>
            <h1>Logout</h1>
            <div>You have been successfully logged out</div>
        </div>
    )
}