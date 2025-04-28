import  { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import error from "eslint-plugin-react/lib/util/error.js";

const Login = (setAuth) => {

   // const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [signUp, setSignUp] = useState("Sign up")

    const [client, setClient] =useState({
        username:"",
        password:""
    })

    const setInfo = (e) => {
        const value = e.target.value;
        setClient({...client, [e.target.name]: value})
    }

    const createClient = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8181/api/clients/createClient", client)
            .then(() => {
                navigate("/")
            }).catch((error) => {
            console.log(error)
        })
    }





    return (

        <div>



                <form >

                    <label>username</label>
                    <input type="text" placeholder="Username"  onChange={(e) => setInfo(e)} value={client.username}/>

                    <label>password</label>
                    <input type="text" placeholder="Password" required onChange={(e) => setInfo(e)} value={client.password}/>

                    <button type="submit" onClick={createClient}>Sign Up</button>
                </form>




        </div>


    )

}
export default Login