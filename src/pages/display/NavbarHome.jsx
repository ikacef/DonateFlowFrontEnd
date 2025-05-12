import "react";
import logo from "../../img/logoFlow.png";
import {useNavigate} from "react-router-dom";
import '../../styles/navbar.css'

function NavbarHome(){
    const navigate  = useNavigate();


    const navigateToHome = () => {
        navigate('/home'); // replace by home
    };

    const navigateToStore = () => {
        navigate('/store');
    };

    const navigateToWallet = () => {
        navigate('/wallet');
    };

    const navigateToCampaign = () => {
        navigate('/campaign');
    };

    const handleLogout = () => {
        navigate('/');
    }

    return (


        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className=" navbar container-fluid">
                <a className="navTitle navbar-brand" onClick={navigateToHome}>
                    <img src={logo} className="logoFlow"></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"  id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link"
                               onClick={navigateToCampaign}
                               role="button">Campaigns</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                               onClick={navigateToWallet}
                               role="button">Wallet</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" role="button"
                               onClick={navigateToStore}>Store</a>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center" role="search">
                        <button className="btn btn-logout" onClick={handleLogout}>Logout</button>

                    </div>
                </div>
            </div>
        </nav>
    )


}

export default NavbarHome