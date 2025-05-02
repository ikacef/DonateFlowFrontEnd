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
        navigate('/*');
    }

    return (


        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className=" navbar container-fluid">
                <a className="navTitle navbar-brand" onClick={navigateToHome}>Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navElements navbar-collapse" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="navElement nav-link " aria-current="page"
                               onClick={navigateToCampaign}
                               role="button">Campaigns</a>
                        </li>
                        <li className="nav-item">
                            <a className="navElement nav-link " aria-current="page"
                               onClick={navigateToWallet}
                               role="button">Wallet</a>
                        </li>
                        <li className="nav-item">
                            <a className="navElement nav-link" aria-current="page" role="button"
                               onClick={navigateToStore}>Store</a>
                        </li>
                    </ul>

                    <img src={logo} className="logoFlow"></img>

                    <section className="d-flex" role="search">
                        <button onClick={handleLogout}>Logout</button>

                    </section>
                </div>
            </div>
        </nav>
    )


}

export default NavbarHome