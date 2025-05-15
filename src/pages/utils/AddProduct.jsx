import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import "../../styles/addProduct.css"
/* Code fait par jayden et nassim*/
function AddProduct() {
    const navigate  = useNavigate();
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState(null);
    const [productStock, setProductStock] = useState(null);
    const [productCategory, setProductCategory] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newProduct = {
            productName,
            productDescription,
            productPrice,
            productStock,
            productCategory,
            imageUrl
        };

        try {
            //const response = await axios.post("http://10.10.2.114:9403/products/createProduct", newProduct);
            const response = await axios.post("http://localhost:9403/products/createProduct", newProduct);
            alert("Produit créé :", response.data);
        } catch (error) {
            alert("Veuillez vérifier vos données", error.response?.data || error.message);
        }
    };

    const navigateToProducts = () => {
        navigate('/cryptofy');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="form-title">Ajouter un produit</h1>
            <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Nom du produit"
                required
            />
            <textarea
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="Description du produit"
                required
            />
            <input
                type="number"
                step="1.00"
                value={productPrice}
                onChange={(e) => setProductPrice(parseFloat(e.target.value))}
                placeholder="Prix du produit visé"
                required
            />
            <input
                type="number"
                step="1"
                value={productStock}
                onChange={(e) => setProductStock(e.target.value)}
                placeholder="Stock actuel "
                required
            />
            <input
                type="text"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                placeholder="Catégorie du produit"
                required
            />
            <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Lien url de l'image du produit"
                required
            />
            <button type="submit" onClick={navigateToProducts}>Créer le produit</button>
        </form>
    );
}

export default AddProduct;
