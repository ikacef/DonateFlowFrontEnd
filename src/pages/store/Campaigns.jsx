import "react";
import NavbarHome from "../../testFolder/NavbarHome.jsx";
import Footer from "../display/Footer.jsx";
import "../../styles/charities.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../display/NavBar.jsx";

function Campaigns() {
    const [listCampaigns, setListCampaigns] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [visibleCount, setVisibleCount] = useState(6);

    const loadAllCampaigns = async () => {
        try {
            //const result = await axios.get("http://10.10.2.114:9403/campaigns/getAllCampaigns");
            const result = await axios.get("http://localhost:9403/campaigns/getAllCampaigns");
            setListCampaigns(result.data);
        } catch (error) {
            console.error("Erreur", error);
        }
    };

    const handleUpdate = async (id) => {
        const newTitle = prompt("Nouveau titre:");
        const newDesc = prompt("Nouvelle description:");
        const newCurrentAmount = prompt("Montant ammassé : ")
        const newGoalAmount = prompt("Montant but : ")
        const newImageUrl = prompt("Lien de l'image: ")
        if (!newTitle || !newDesc || !newCurrentAmount || !newGoalAmount || !newImageUrl) return;

        try {
            //await axios.put(`http://10.10.2.114:9403/campaigns/update/${id}`, {
            await axios.put(`http://localhost:9403/campaigns/update/${id}`, {
                title: newTitle,
                description: newDesc,
                currentAmount: newCurrentAmount,
                goalAmount: newGoalAmount,
                imageUrl: newImageUrl,
                isActivee: true
            });
            alert("Campagne mise à jour !");
            loadAllCampaigns();
        } catch (error) {
            alert("Erreur de mise à jour: " + error.response?.data.message || "Erreur inconnue");
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Supprimer cette campagne ?")) return;

        try {
            //await axios.delete(`http://10.10.2.114:9403/campaigns/delete/${id}`);
            await axios.delete(`http://localhost:9403/campaigns/delete/${id}`);
            alert("Campagne supprimée !");
            loadAllCampaigns();
        } catch (error) {
            alert("Erreur de suppression: " + (error.response?.data?.message || "Erreur inconnue"));
        }
    };

    useEffect(() => {
        loadAllCampaigns();

        const script = document.createElement("script");
        script.src = "https://widget.zeffy.com/widget.js";
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
            console.log("Zeffy widget script loaded successfully!");
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const navigate = useNavigate();

    const navigateToCreation = () => {
        navigate('/addCampaign');
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <div className="main">
            <NavBar />

            <div className="charitiesMain container py-4">
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

                    <button className="btn btn-outline-info" onClick={navigateToCreation}>Add your own Campaign</button>
                </div>

                <div className="row g-4">
                    {listCampaigns.slice(0, visibleCount).map((campaign, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{campaign.title}</h5>
                                    <img src={campaign.imageUrl}></img>
                                    <p className="card-text">
                                        <strong>Raised:</strong> ${campaign.currentAmount || 0} of
                                        ${campaign.goalAmount}
                                    </p>
                                    <button
                                        className="btn btn-primary w-100"
                                        onClick={() => window.open('https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-15946?modal=true', '_blank')}
                                    >
                                        Donate Now
                                    </button>
                                    <button onClick={() => handleUpdate(campaign.idCampaign)}>Modify</button>
                                    <button onClick={() => handleDelete(campaign.idCampaign)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleCount < listCampaigns.length && (
                    <div className="text-center my-4">
                        <button className="btn btn-outline-primary" onClick={handleLoadMore}>Load More Campaigns</button>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default Campaigns;
