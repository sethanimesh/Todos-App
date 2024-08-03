import { useParams, Link } from "react-router-dom";

export default function WelcomeComponent(){
    const {username} = useParams();

    return (
        <div className='welcome'>
            <h1>Welcome in {username}</h1>
            To access Your Todos - <Link to="/listtodos">Click Here!</Link>
        </div>
    )
}