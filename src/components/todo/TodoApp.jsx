import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import LoginComponent from './LoginComponent'
import ErrorComponent from './ErrorComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodosComponent from './ListTodosComponent'

import './TodoApp.css'
import AuthProvider from './security/AuthContext'

export default function TodoApp(){
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<LoginComponent/>}></Route>
                        <Route path="/login" element={<LoginComponent/>}></Route>
                        <Route path="/welcome/:username" element={<WelcomeComponent/>}></Route>
                        <Route path="/listtodos" element={<ListTodosComponent/>}/>
                        <Route path="/logout" element={<LogoutComponent/>}/>
                        
                        <Route path="*" element={<ErrorComponent/>}></Route>
                        
                    </Routes>
                    <FooterComponent/>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}