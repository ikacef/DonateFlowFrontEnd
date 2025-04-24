import  { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = (setAuth) => {

    const [client, setClient] = useState({username : "", password : ""});
    const [, setError] = useState(false);
    const navigate = useNavigate();

    const clientInfo = (e) => {
        setClient({...client, [e.target.name]: e.target.value});
    }

    const clientSignUp= async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8181/api/auth/signup`);
            if (response.data) {
                setAuth(true);
                navigate("/home"); // replace by home
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

            <form onSubmit={clientSignUp}>

                <h2>Access our website with your client info</h2>

                <input type="text" name="username" placeholder="username" onChange={clientInfo}/>
                <input type="password" name="password" placeholder="password" onChange={clientInfo}/>
                <button id="loginButton" type="submit">Sign in</button>
                <button id="loginButton" type="submit">Sign up</button>

            </form>

        </div>


    )

}
export default Login