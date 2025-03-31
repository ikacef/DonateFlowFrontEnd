import "react";
import logo from "../../img/logoFlow.png";
import {useNavigate} from "react-router-dom";

function NavbarHome(){
    const navigate  = useNavigate();


    const navigateToHome = () => {
        navigate('/home');
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
                            <a className="navElement nav-link active" aria-current="page"
                               onClick={navigateToCharity}
                               role="button">Charities</a>
                        </li>
                        <li className="nav-item">
                            <a className=" navElement nav-link active" aria-current="page"
                               onClick={navigateToWallet}
                               role="button">Wallet</a>
                        </li>
                        <li className="nav-item">
                            <a className="navElement nav-link" aria-current="page" role="button"
                               onClick={navigateToStore}>Store</a>
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
    )


}

export default NavbarHome