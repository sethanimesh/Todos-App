import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import retrieveHelloWorld, { retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService";

export default function WelcomeComponent(){
    const {username} = useParams();

    const [message, setMessage] = useState(null)

    function callRestApi(){
        // retrieveHelloWorld()
        // .then((success)=>successfulResponse(success))
        // .catch((error)=>errorResponse(error))
        // .finally(()=>console.log("cleanup"))
    
        retrieveHelloWorldPathVariable('animesh')
            .then((success)=>successfulResponse(success))
            .catch((error)=>errorResponse(error))
            .finally(()=>console.log("cleanup"))
    }

    function successfulResponse(success){
        console.log(success)
        setMessage(success.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }

    return (
        <div className='welcome'>
            <h1>Welcome in {username}</h1>
            <div>
            To access Your Todos - <Link to="/listtodos">Click Here!</Link>
            </div>
            <button className="btn btn-success m-5" onClick={callRestApi}>Call Hello World Rest API</button>
            <div className="text-area">{message}</div>
        </div>
    )
}