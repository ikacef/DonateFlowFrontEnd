import "react";
import NavbarHome from "./NavbarHome.jsx";
import Footer from "./Footer.jsx";
import "../../styles/charities.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Campaigns() {
    const [listCampaigns, setListCampaigns] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [visibleCount, setVisibleCount] = useState(6);

    const loadAllCampaigns = async () => {
        try {
            const result = await axios.get("http://localhost:8181/campaigns/getAllCampaigns");
            setListCampaigns(result.data);
        } catch (error) {
            console.error("Erreur", error);
        }
    };

    useEffect(() => {
        loadAllCampaigns();
    }, []);

    const navigate = useNavigate();

    const navigateToCreation = () => {
        navigate('/add');
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };


    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };





    return (
        <div className="main">
            <NavbarHome />

            <div className="charitiesMain container py-4">
                {/* Search and Filters */}
                <div className="row align-items-center mb-4">

                    <div className="col-md-6 mb-2 mb-md-0">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search campaigns..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>

                    <button className="btn btn-outline-info" onClick={navigateToCreation}>Add your own Campaign
                    </button>
                </div>

                {/* Campaign Cards */}
                <div className="row g-4">
                    {listCampaigns.slice(0, visibleCount).map((campaign, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card h-100">
                                <div className="position-relative">
                                    <img
                                        src="https://via.placeholder.com/400x200"
                                        className="card-img-top"

                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{campaign.title}</h5>
                                    <p className="text-muted">👤 {campaign.creatorUsername}</p>
                                    <p className="card-text">{campaign.description}</p>
                                    <p>
                                        <strong>Raised:</strong> ${campaign.currentAmount || 0} of ${campaign.goalAmount}
                                    </p>
                                    <button className="btn btn-primary w-100" >Donate Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCount < listCampaigns.length && (
                    <div className="text-center my-4">
                        <button className="btn btn-outline-primary" onClick={handleLoadMore}>
                            Load More Campaigns
                        </button>

                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default Campaigns;
