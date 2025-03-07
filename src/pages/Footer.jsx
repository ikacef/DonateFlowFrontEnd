import "react";
import '../styles/footer.css';
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";



function Footer(){


    return (

        <footer className="footer-main">

            <div className="foot-links">
                <h4 className="links-title">Quick Links</h4>
                <ul className="link-list">
                    <li><a href="../pages/Service.jsx">About us</a></li>
                    <li><a href="../pages/Service.jsx">How it works</a></li>
                    <li><a href="../pages/Service.jsx">FAQs</a></li>
                </ul>
            </div>

            <div className="foot-source">
                <h4 className="links-title">Ressources</h4>
                <ul className="source-list">
                    <li><a href="../pages/Service.jsx">Documentaion</a></li>
                    <li><a href="../pages/Service.jsx">Support</a></li>
                    <li><a href="../pages/Service.jsx">Contact</a></li>
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

    )

}

export default Footer