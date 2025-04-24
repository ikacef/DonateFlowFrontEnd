import React from 'react';
import CharityCard from './testCharity.jsx';
import '../../styles/test/testList.css';

const sampleCharities = [
    {
        title: "Save the Children",
        image: "/images/children.jpg",
        category: "Global Initiative",
        raised: "1.2M",
        goal: "2M",
        reward: "2x",
        verified: true
    },
    {
        title: "Green Earth Project",
        image: "/images/forest.jpg",
        category: "Environmental",
        raised: "800K",
        goal: "1M",
        reward: "1.5x",
        verified: true
    },
    {
        title: "Global Health Initiative",
        image: "/images/healthcare.jpg",
        category: "Healthcare",
        raised: "500K",
        goal: "1.5M",
        reward: "3x",
        verified: true
    }
];

const CampaignList = () => {
    return (
        <div className="campaign-list">
            {sampleCharities.map((charity, index) => (
                <CharityCard key={index} {...charity} />
            ))}
            <button className="load-more">Load More Charities</button>
        </div>
    );
};

export default CampaignList;
