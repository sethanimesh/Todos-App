import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import LoginComponent from './LoginComponent'
import ErrorComponent from './ErrorComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodosComponent from './ListTodosComponent'
import AuthProvider, {useAuth } from "./security/AuthContext"

import './TodoApp.css'

function AuthenticatedRoute({children}){

    const authContext = useAuth()
    if (authContext.isAuthenticated){
        return children
    }

    return <Navigate to="/"/>
    
}

export default function TodoApp(){
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<LoginComponent/>}></Route>
                        <Route path="/login" element={<LoginComponent/>}></Route>

                        <Route path="/welcome/:username" element={
                            <AuthenticatedRoute>
                                <WelcomeComponent/>
                            </AuthenticatedRoute>
                        }></Route>

                        <Route path="/listtodos" element={
                            <AuthenticatedRoute>
                                <ListTodosComponent/>
                            </AuthenticatedRoute>
                        }/>

                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent/>
                            </AuthenticatedRoute>
                            }/>
                        <Route path="*" element={<ErrorComponent/>}></Route>
                        
                    </Routes>
                    <FooterComponent/>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}