import React from 'react'
import '../../styles/test/test.css'

class App extends React.Component {
    render() {
        return (<div>
            <nav class="navbar">
                <div class="logo">DonateFlow</div>
                <div class="nav-links"><a href="#">Home</a>
                    <a href="#">Charities</a>
                    <a href="#">Store</a> <a
                    href="#">Wallet</a></div>
                <button>Connect Wallet</button>
            </nav>
            <section class="hero-section relative">
                <div class="wallet-info"><p>Balance: 0.045 ETH</p>
                    <button>Connect Wallet</button>
                </div>
                <h1>Make a Difference Today</h1>
                <p>Support verified charities and earn crypto rewards</p>
                <div class="cta-buttons">
                    <button>Start Donating</button>
                    <button>Learn More</button>
                </div>
            </section>
            <section class="charity-cards-section">
                <div class="charity-card"><img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGRyZW58ZW58MHx8MHx8fDA%3D"
                    alt="Save the Children"></img>
                    <div class="card-content">
                        <h3 class="card-title">Save the Children</h3>
                        <p class="card-description">Providing education, healthcare, and emergency aid to children in need
                        worldwide.</p>
                        <div class="card-footer"><span class="verified">Verified</span> <span
                            class="reward">2x Rewards</span></div>
                        <button class="donate-button">Donate Now</button>
                    </div>
                </div>
                <div class="charity-card"><img
                    src="https://thumbs.dreamstime.com/b/green-planet-your-heart-hands-usa-environment-concept-34644973.jpg"
                    alt="Green Earth Project"></img>
                    <div class="card-content"><h3 class="card-title">Green Earth Project</h3>
                        <p class="card-description">Protecting forests and wildlife through conservation efforts and
                            community engagement.</p>
                        <div class="card-footer"><span class="verified">Verified</span> <span class="reward">1.5x Rewards</span>
                        </div>
                        <button class="donate-button">Donate Now</button>
                    </div>
                </div>
            </section>
            <section class="cryptofy-section">
                <div class="cryptofy-header"><h2>Welcome to Cryptofy</h2>                  <p>Explore stores and
                    products available for purchase with your donated cryptocurrency</p></div>
                <div class="store-items"></div>
            </section>
            <footer><p>&copy; 2025 DonateFlow. All rights reserved.</p>
                <div class="quick-links"><a href="#">About Us</a> <a href="#">How It Works</a> <a href="#">FAQs</a>
                </div>
                <div class="resources"><a href="#">Documentation</a> <a href="#">Privacy Policy</a> <a href="#">Terms of
                    Service</a></div>
                <div><input class="newsletter-input" type="email" placeholder="Enter your email"></input></div>
            </footer>
        </div>)
    }
}export default App