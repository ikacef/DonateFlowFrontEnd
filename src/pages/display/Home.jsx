import "react";
import "../../styles/home.css";


import Footer from "./Footer.jsx";
import NavbarHome from "./NavbarHome.jsx";


function Home() {


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