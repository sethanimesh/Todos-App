export default function ListTodosComponent(){

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