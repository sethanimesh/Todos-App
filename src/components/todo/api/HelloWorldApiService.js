import axios from "axios"

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

export default function retrieveHelloWorld(){
    return (
        apiClient.get("/hello-world")
    )
}

export const retrieveHelloWorldPathVariable 
    = (username)=>apiClient.get(`/hello-world/path-variable/${username}`);