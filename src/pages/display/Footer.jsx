import "react";
import '../../styles/footer.css';
import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.png";
import logo3 from "../../img/logo3.png";
import {useNavigate} from "react-router-dom";

/* Code fait uniquement par jayden*/

function Footer(){

    const navigate = useNavigate();

    const navigatetoAbout = () => {
        navigate('/about'); // replace by home
    };

    const navigateToHowIW = () => {
        navigate('/how');
    };

    const navigateToDoc = () => {
        navigate('/doc');
    };

    const navigateToSupport = () => {
        navigate('/support');
    };


    return (

        <footer className="footer-main ">
            <div className="footer-container">

                <div className="footer-section">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-list">
                        <li><a className="linkeffect" onClick={navigatetoAbout} >About us</a></li>
                        <li><a className="linkeffect" onClick={navigateToHowIW}>How it works</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4 className="footer-title">Ressources</h4>
                    <ul className="footer-list">
                        <li><a className="linkeffect" onClick={navigateToDoc}>Documentaion</a></li>
                        <li><a className="linkeffect" onClick={navigateToSupport}>Support</a></li>
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