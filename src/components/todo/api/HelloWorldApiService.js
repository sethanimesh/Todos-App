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

export const retrieveAllTodosUsername = (username)=>apiClient.get(`/users/${username}/todos`);

export const deleteTodoApi = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`);

export const retrieveTodoApi = (username, id) => apiClient.get(`/users/${username}/todos/${id}`);

export const updateTodoApi = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo);

export const createTodoApi = (username, todo) => apiClient.post(`/users/${username}/todos`, todo);