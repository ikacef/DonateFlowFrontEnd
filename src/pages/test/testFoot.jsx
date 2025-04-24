import React from 'react';
import '../../styles/test/testFoot.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div>
                    <h2>DonateFlow</h2>
                    <p>Making charitable giving more rewarding through blockchain technology.</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <li>About Us</li>
                        <li>How it Works</li>
                        <li>FAQs</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h4>Resources</h4>
                    <ul>
                        <li>Documentation</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div>
                    <h4>Newsletter</h4>
                    <p>Stay updated with our latest charitable initiatives.</p>
                    <input type="email" placeholder="Enter your email" />
                    <button>→</button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 DonateFlow. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
