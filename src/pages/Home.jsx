import React from "react";
import {useNavigate} from "react-router-dom";

function Home(){

    const navigate = useNavigate();

    return(

        <div>

            <Button onClick={navigate("/")}>NotFound</Button>


        </div>

    )

}
export default Home