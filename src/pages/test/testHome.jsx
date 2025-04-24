import React from 'react';
import '../../styles/test/testHome.css';
import SearchFilterBar from './testSearch.jsx';
import CampaignList from './testList.jsx';
import TestNav from './testNav.jsx';
import TestFoot from './testFoot.jsx';

const Home = () => {
    return (
        <header className="home">
        <TestNav/>
        <div className="home">

            <section className="hero">
                <h1>Make a Difference Today</h1>
                <p>Support verified charities and earn crypto rewards</p>
                <div className="hero-buttons">
                    <button className="primary">Start Donating</button>
                    <button className="secondary">Learn More</button>
                </div>
            </section>

            <SearchFilterBar />
            <CampaignList />
            <TestFoot/>
        </div>
        </header>
    );
};

export default Home;
