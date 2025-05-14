import "react";
import '../../styles/footer.css';
import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.png";
import logo3 from "../../img/logo3.png";

/* Code fait uniquement par jayden*/

function Footer(){


    return (

        <footer className="footer-main ">
            <div className="footer-container">

                <div className="footer-section">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-list">
                        <li><a href="../doc/About.jsx">About us</a></li>
                        <li><a href="../doc/HowIW.jsx">How it works</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Ressources</h4>
                    <ul className="footer-list">
                        <li><a href="../doc/Documentation.jsx">Documentaion</a></li>
                        <li><a href="../doc/Support.jsx">Support</a></li>
                    </ul>
                </div>


                <div className="footer-section footer-about">
                <h3 className="footer-brand">DonateFlow</h3>
                    <p className="footer-description">Supporting causes that matter.<br/>
                        Making giving simple and secure.<br/>
                        Every donation drives change.<br/>
                        Join the flow of generosity</p>
                </div>


                <div className="footer-bottom">Projet de développement d'une application Web <>&copy;</> 2025 Copyright
                    DonateFlow. All rights reserved
                </div>
                <div className="footer-social">
                    <a href="http://www.linkedin.com"><img src={logo1} className="logo1"/></a>
                    <a href="http://www.github.com"><img src={logo2} className="logo2"/></a>
                    <a href="http://www.discord.com"><img src={logo3} className="logo3"/></a>
                </div>
            </div>
        </footer>

    )

}

export default Footer