export default function TodoApp(){
    return (
        <>
            <div>Todo Application</div>
            <LoginComponent/>
        </>
    )
}

function LoginComponent(){
    return (
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <button type="button" name="login">Login</button>
                </div>
            </div>
        </div>
    )
}