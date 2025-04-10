import "react";
import "../../styles/home.css";

import {useNavigate} from "react-router-dom";
import Footer from "./Footer.jsx";
import NavbarHome from "./NavbarHome.jsx";


function Home(auth, setAuth) {
    const navigate  = useNavigate();

   /* if (!auth) {
        navigate("/");
        return null;
    }*/

    return (

        <header className="home">

            <><NavbarHome/></>

                <section className="front">Welcome to our DonateFlow website</section>

                <><Footer/></>
        </header>

)

}
export default Home