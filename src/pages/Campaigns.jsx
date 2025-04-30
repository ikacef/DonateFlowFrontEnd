import "react"
import NavbarHome from "./display/NavbarHome.jsx";
import Footer from "./display/Footer.jsx";
import "../styles/charities.css"
import { useEffect, useState } from "react";
import axios from "axios";

function Campaigns() {

    const [listCampaigns, setListCampaigns] = useState([]);

    const loadAllCampaigns = async () => {
        try {
            const result = await axios.get("http://localhost:8181/campaigns/getAllCampaigns");
            console.log(result.data);
            setListCampaigns(result.data);
        } catch (error) {
            console.error("Erreur", error);
        }
    };

    useEffect(() => {
        loadAllCampaigns();
    }, []);

    return (
        <div className="main">
            <NavbarHome />

            <div className="charitiesMain container py-4">
                {/* Search and Filters */}
                <div className="row align-items-center mb-4">
                    <div className="col-md-6 mb-2 mb-md-0">
                        <input type="text" className="form-control" placeholder="Search campaigns..." />
                    </div>
                    <div className="col-md-3 mb-2 mb-md-0">
                        <select className="form-select">
                            <option>All Categories</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <select className="form-select">
                            <option>Sort by: Most Recent</option>
                        </select>
                    </div>
                </div>

                {/* Campaign Cards */}
                <div className="row g-4">
                    {listCampaigns.map((campaign, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card h-100">
                                <div className="position-relative">
                                    <img
                                        src="https://via.placeholder.com/400x200"
                                        className="card-img-top"
                                        alt={campaign.title}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{campaign.title}</h5>
                                    <p className="text-muted">👤 {campaign.creatorUsername}</p>
                                    <p className="card-text">{campaign.description}</p>
                                    <p>
                                        <strong>Raised:</strong> ${campaign.currentAmount || 0} / ${campaign.goalAmount}
                                    </p>
                                    <button className="btn btn-primary w-100">Donate Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center my-4">
                    <button className="btn btn-outline-primary">Load More Campaigns</button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Campaigns;
