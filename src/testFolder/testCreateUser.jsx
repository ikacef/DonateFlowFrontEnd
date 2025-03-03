import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function TestCreateUser(){

    const  [user, setUser] = useState({
        fname: "",
        lname: "",
        email: ""
    });

    const setAttributes = (e) => {
        const value = e.target.value;
        setUser({...user, [e.target.name]: value})
    }

    const navigate = useNavigate();
    const createUser = (e) => {

        e.preventDefault();
        axios.post("http://localhost:8181/flow/createdUser", user)
            .then(() =>{
                navigate("*")})
            .catch((error) =>{
                console.log(error);
            });
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-lg-start">
                <div className="col-md-6">
                    <h2 className="mb-4">Add User</h2>
                    <form className="form-detail" onSubmit={(e) => createUser(e)} method="post">
                        <div className="mb-3 ">
                            <label htmlFor="lastname" className="form-label text-start d-block">Last Name</label>
                            <input type="text" className="form-control" name="lname" id="lastname"
                                   placeholder="Enter your last name"
                                   required
                                   onChange={(e) => setAttributes(e)}
                                   value={user.lname}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="firstname" className="form-label text-start d-block">First Name</label>
                            <input type="text" className="form-control" name="fname" id="firstname"
                                   placeholder="Enter your first name"
                                   required
                                   onChange={(e) => setAttributes(e)}

                                   value={user.fname}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-start d-block">Email</label>
                            <input type="email" className="form-control" name="email" id="email"
                                   placeholder="Enter your email"
                                   required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                                   onChange={(e) => setAttributes(e)}
                                   value={user.email}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )


}
export default TestCreateUser