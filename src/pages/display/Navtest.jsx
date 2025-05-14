import React from "react";
import logo from "../../img/logoFlow.png";
import { useNavigate } from "react-router-dom";
import '../../styles/navtest.css';

function Navtest() {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("client");

    const handleLogout = () => {
        localStorage.removeItem("client");
        window.location.href = "/login";
    };

    const handleLogin = () => {
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <div className="navbar-left" onClick={() => navigate('/')}>
                <img src={logo} alt="DonateFlow" className="navbar-logo" />
            </div>

            <div className="navbar-center">
                <a onClick={() => navigate('/campaign')} className="nav-link">Campaigns</a>
                <a onClick={() => navigate('/wallet')} className="nav-link">Wallet</a>
                <a onClick={() => navigate('/cryptofy')} className="nav-link">Cryptofy</a>
                <a onClick={() => navigate('/store')} className="nav-link">Store</a>
            </div>

            <div className="navbar-right">
                {isLoggedIn ? (
                    <button className="nav-button" onClick={handleLogout}>Logout</button>
                ) : (
                    <button className="nav-button" onClick={handleLogin}>Login</button>
                )}
            </div>
        </nav>
    );
}

export default Navtest;
