import {createContext, createState, useContext, useState} from "react";

//1 - Create a context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2 - Share the created context with other components
export default function AuthProvider({children}){

    //Put some state in context
    const[number, setNumber] = useState(10)

    const[isAuthenticated, setAuthenticated] = useState(false)
    //Update states every few seconds
    // setInterval(()=>setNumber(number+1) ,10000)

    const valueToBeShared = {number, isAuthenticated, setAuthenticated}

    return (
        <AuthContext.Provider value = {valueToBeShared}>
            {children}
        </AuthContext.Provider>
    )
}

