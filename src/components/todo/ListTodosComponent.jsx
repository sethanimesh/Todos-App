import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveAllTodosUsername } from "./api/HelloWorldApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";


export default function ListTodosComponent(){

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDate())

    const authContext = useAuth()
    const username = authContext.username;

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)

    const navigate = useNavigate()

    // const todos = [
    //     // {id:1, description:"Learn AWS", isdone:false, targetDate:targetDate},
    //     // {id:2, description:"Learn DevOps", isdone:false, targetDate:targetDate},
    //     // {id:3, description:"Learn Full Stack Ops", isdone:false, targetDate:targetDate}
    // ]

    //useeffect - tell react your component needs to do something after rendering

    useEffect(
        ()=>refreshTodos(), []
    )

    function refreshTodos(){
        retrieveAllTodosUsername(username)
        .then(response=>{
            console.log(response)
            setTodos(response.data)
        })
        .catch(error=>console.log(error))
    }

    function deleteTodo(id){
        deleteTodoApi(username, id)
        .then(()=>{
            setMessage(`Delete the todo with id ${id} successful`)
            refreshTodos()})
    }

    function updateTodo(id){
        navigate(`/todos/${id}`)
    }

    function addNewTodo(){
        navigate(`/todos/-1`)
    }

    return (
        <div className="container">
            <h1>Things to do</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>DESCRIPTION</th>
                            <th>IS DONE?</th>
                            <th>TARGET DATE</th>
                            <th>DELETE</th>
                            <th>UPDATE</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo=>(
                                <tr key={todo.id}> 
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning" onClick={()=>deleteTodo(todo.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={()=>updateTodo(todo.id)}>Update</button></td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
            <button className="btn btn-success" onClick={addNewTodo}>Add New Todo</button>
        </div>
    )
}