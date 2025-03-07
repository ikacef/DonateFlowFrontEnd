import "react";
import '../styles/navbar.css';
import logo from "../img/logoFlow.png";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navTitle navbar-brand" href="#">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navElements navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="navElement nav-link active" aria-current="page" href="#" role="button">Charities</a>
                        </li>
                        <li className="nav-item">
                            <a className=" navElement nav-link active" aria-current="page" href="#" role="button">Wallet</a>
                        </li>
                        <li className="nav-item">
                            <a className="navElement nav-link" aria-current="page" href="#" role="button">Store</a>
                        </li>
                    </ul>

                    <img src={logo} className="logoFlow"></img>

                    <form className="d-flex" role="search">
                        <input className="searchBar form-control me-2" type="search" placeholder="Find what you're looking for here" aria-label="Search"/>
                        <button className="searchButton " type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )

}

export default Navbar;