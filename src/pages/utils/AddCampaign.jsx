import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import "../../styles/addCampaign.css";
/* Code fait par jayden et nassim*/
function AddCampaign() {
    const navigate  = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [goalAmount, setGoalAmount] = useState(null);
    const [currentAmount, setCurrentAmount] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCampaign = {
            title,
            description,
            goalAmount,
            currentAmount,
            imageUrl
        };

        try {
            //const response = await axios.post("http://10.10.2.114:9403/campaigns/createCampaign", newCampaign);
            const response = await axios.post("http://localhost:9403/campaigns/createCampaign", newCampaign);
            alert("Campagne créée :", response.data);
        } catch (error) {
            alert("Veuillez vérifier vos données", error.response?.data || error.message);
        }
    };

    const navigateToCampaign = () => {
        navigate('/campaign');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="form-title">Ajouter une compagne</h1>
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
                step="1.00"
                value={goalAmount}
                onChange={(e) => setGoalAmount(parseFloat(e.target.value))}
                placeholder="Montant visé (ex: 5000.00)"
                required
            />
            <input
                type="number"
                step="1.00"
                value={currentAmount}
                onChange={(e) => setCurrentAmount(parseFloat(e.target.value))}
                placeholder="Montant actuel (ex: 0.00)"
                required
            />
            <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Lien url de l'image de la campagne"
                required
            />
            <button type="submit" onClick={navigateToCampaign}>Créer la campagne</button>
        </form>
    );
}

export default AddCampaign;
