import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = (setAuth) => {

    const [user, setUser] = useState({username : "", password : ""});
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const userInfo = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const _login() = async (e) => {

        e.preventDefault();
        try {

          //  const feedback = await axios.post('http://localhost:8181/') // TODO controller method
            if (feedback.data){
                setAuth(true);
                navigate("/");
            }else {
                setError(true)
            }
        }catch (err){
            console.error("Login error", err)
            setError(true)
        }
    }

    return (

        <div>

            <form onSubmit={_login}>

                <input type="text" name="username" placeholder="username" onChange={userInfo}/>
                <input type="password" name="password" placeholder="password" onChange={userInfo}/>
                <button id="loginButton" type="submit">Login</button>

            </form>

            {error && <span style={{color:"red"}}>Wrong userInfo</span>}

        </div>



    )

}
export default Login