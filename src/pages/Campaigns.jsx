import "react";
import NavbarHome from "./display/NavbarHome.jsx";
import Footer from "./display/Footer.jsx";
import "../styles/charities.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Campaigns() {
    const [listCampaigns, setListCampaigns] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("mostRecent");
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

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    const filteredCampaigns = listCampaigns.filter((campaign) =>
        campaign.title.toLowerCase().includes(searchQuery)
    );

    const sortedCampaigns = filteredCampaigns.sort((a, b) => {
        switch (sortOption) {
            case "mostRecent":
                return new Date(b.creationDate) - new Date(a.creationDate);
            case "oldest":
                return new Date(a.creationDate) - new Date(b.creationDate);
            case "mostRaised":
                return (b.currentAmount || 0) - (a.currentAmount || 0);
            default:
                return 0;
        }
    });

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
                    <div className="col-md-3 mb-2 mb-md-0">
                        <select className="form-select" disabled>
                            <option>All Categories</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <select className="form-select" value={sortOption} onChange={handleSortChange}>
                            <option value="mostRecent">Sort by: Most Recent</option>
                            <option value="oldest">Sort by: Oldest</option>
                            <option value="mostRaised">Sort by: Most Raised</option>
                        </select>
                    </div>
                </div>

                {/* Campaign Cards */}
                <div className="row g-4">
                    {sortedCampaigns.slice(0, visibleCount).map((campaign, index) => (
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

                {/* Load More Button */}
                {visibleCount < sortedCampaigns.length && (
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
