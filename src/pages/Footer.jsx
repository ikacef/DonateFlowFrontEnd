import React from "react";
import '../styles/footer.css';
import '../img/logo1.jpg';
import '../img/logo2.jpg';
import '../img/logo3.jpg' ;



function Footer(){


    return (

        <footer className="footer-main">

            <div className="foot-links">
                <h4 className="links-title">Quick Links</h4>
                <ul className="link-list">
                    <li><a href="../pages/Service.jsx">About us</a></li>
                    <li><a href="../pages/Service.jsx">How it works</a></li>
                    <li><a href="../pages/Service.jsx">FAQs</a></li>
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


            <div className="foot-source">



            </div>


            <div className="footer-bottom">Projet de développement d'une application Web <>&copy;</> 2025 Copyright
                DonateFlow. All rights reserved
                <a href="http://www.linkedin.com"><img src="../img/logo1.jpg"/></a>
                <a href="http://www.github.com"><img src="../img/"/></a>
                <a href="http://www.discord.com"><img src="../img/"/></a>
            </div>

        </footer>

    )

}

export default Footer