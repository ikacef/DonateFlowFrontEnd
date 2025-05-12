import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
/* Code fait par jayden et nassim*/
function AddCampaign() {
    const navigate  = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [goalAmount, setGoalAmount] = useState(0.00);
    const [currentAmount, setCurrentAmount] = useState(0.00); // souvent 0.00 par défaut

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCampaign = {
            title,
            description,
            goalAmount,
            currentAmount,
        };

        try {
            const response = await axios.post("http://10.10.2.114:8989/campaigns/createCampaign", newCampaign);
            console.log("Campagne créée :", response.data);
        } catch (error) {
            console.error("Erreur de création :", error.response?.data || error.message);
        }
    };

    const navigateToCampaign = () => {
        navigate('/campaign');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titre de la campagne"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description de la campagne"
                required
            />
            <input
                type="number"
                step="0.01"
                value={goalAmount}
                onChange={(e) => setGoalAmount(parseFloat(e.target.value))}
                placeholder="Montant visé (ex: 5000.00)"
                required
            />
            <input
                type="number"
                step="0.01"
                value={currentAmount}
                onChange={(e) => setCurrentAmount(parseFloat(e.target.value))}
                placeholder="Montant actuel (ex: 0.00)"
                required
            />
            <button type="submit" onClick={navigateToCampaign}>Créer la campagne</button>
        </form>
    );
}

export default AddCampaign;
