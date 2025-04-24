import React from 'react';
import '../../styles/test/testCharity.css';

const CharityCard = ({ image, title, category, raised, goal, reward, verified }) => {
    return (
        <div className="charity-card">
            <img src={image} alt={title} />
            <div className="card-content">
                <div className="card-header">
                    <h3>{title}</h3>
                    {verified && <span className="verified">Verified</span>}
                </div>
                <p className="category">{category}</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="raised">Raised: <strong>${raised}</strong> / ${goal}</p>
                <div className="card-footer">
                    <span className="reward">{reward}x Rewards</span>
                    <button className="donate-btn">Donate Now</button>
                </div>
            </div>
        </div>
    );
};

export default CharityCard;
