import "react";
import "../../styles/home.css";
import logo from "../../img/logoFlow.png";
import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.png";
import logo3 from "../../img/logo3.png";
import {useNavigate} from "react-router-dom";


function Home(){


   const navigate  = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

   const navigateToStore = () => {
       navigate('/store');
   };

    const navigateToWallet = () => {
        navigate('/wallet');
    };

    const navigateToCharity = () => {
        navigate('/charity');
    };


    return (

        <header className="home">


            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navTitle navbar-brand" onClick={navigateToHome}>Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navElements navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="navElement nav-link active" aria-current="page" onClick={navigateToCharity}
                                   role="button">Charities</a>
                            </li>
                            <li className="nav-item">
                                <a className=" navElement nav-link active" aria-current="page" onClick={navigateToWallet}
                                   role="button">Wallet</a>
                            </li>
                            <li className="nav-item">
                                <a className="navElement nav-link" aria-current="page"  role="button" onClick={navigateToStore}>Store</a>
                            </li>
                        </ul>

                        <img src={logo} className="logoFlow"></img>

                        <form className="d-flex" role="search">
                            <input className="searchBar form-control me-2" type="search"
                                   placeholder="Find what you're looking for here" aria-label="Search"/>
                            <button className="searchButton " type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            {/*#########################################################################################################################*/}


            <section className="front">Welcome to our DonateFlow website </section>


            {/*#########################################################################################################################*/}

            <footer className="footer-main">

                <div className="foot-links">
                    <h4 className="links-title">Quick Links</h4>
                    <ul className="link-list">
                        <li><a href="../utils/Service.jsx">About us</a></li>
                        <li><a href="../utils/Service.jsx">How it works</a></li>
                        <li><a href="../utils/Service.jsx">FAQs</a></li>
                    </ul>
                </div>

                <div className="foot-source">
                    <h4 className="links-title">Ressources</h4>
                    <ul className="source-list">
                        <li><a href="../utils/Service.jsx">Documentaion</a></li>
                        <li><a href="../utils/Service.jsx">Support</a></li>
                        <li><a href="../utils/Service.jsx">Contact</a></li>
                    </ul>
                </div>


                <div className="foot1">
                    <h3 className="footer-title">DonateFlow</h3>
                    <p className="footer-paragraph">Supporting causes that matter.<br/>
                        Making giving simple and secure.<br/>
                        Every donation drives change.<br/>
                        Join the flow of generosity</p>
                </div>


                <div className="footer-bottom">Projet de développement d'une application Web <>&copy;</> 2025 Copyright
                    DonateFlow. All rights reserved
                </div>
                <div className="images">
                    <a href="http://www.linkedin.com"><img src={logo1} className="logo1"/></a>
                    <a href="http://www.github.com"><img src={logo2} className="logo2"/></a>
                    <a href="http://www.discord.com"><img src={logo3} className="logo3"/></a>
                </div>

            </footer>


        </header>

    )

}

export default Home