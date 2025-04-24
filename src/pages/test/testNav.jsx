import React from 'react';
import '../../styles/test/testNav.css';

const TestNav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1 className="logo">DonateFlow</h1>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>Charities</li>
                    <li>Wallet</li>
                    <li>Store</li>
                </ul>
            </div>
            <div className="navbar-right">
                <span className="balance">0.045 ETH</span>
                <button className="connect-btn">Connect Wallet</button>
            </div>
        </nav>
    );
};

export default TestNav;
