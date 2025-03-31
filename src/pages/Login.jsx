import  { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = (setAuth) => {

    const [client, setClient] = useState({username : "", password : ""});
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const clientInfo = (e) => {
        setClient({...client, [e.target.name]: e.target.value});
    }

    const clientLogIn= async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8181/client/logIn/${client.username}/${client.password}`,);
            if (response.data) {
                setAuth(true);
                navigate("/home");
            } else {
                setError(true);
            }
        } catch (err) {
            console.error("Login error", err);
            setError(true);
        }
    };


    return (

        <div>

            <form onSubmit={clientLogIn}>

                <h2>Access our website with your client info</h2>

                <input type="text" name="username" placeholder="username" onChange={clientInfo}/>
                <input type="password" name="password" placeholder="password" onChange={clientInfo}/>
                <button id="loginButton" type="submit">Login</button>

            </form>

            {error && <span style={{color:"red"}}>Wrong info</span>}

        </div>



    )

}
export default Login