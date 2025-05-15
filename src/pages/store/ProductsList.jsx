import {useState, useEffect} from 'react';
import axios from 'axios';
import NavbarHome from "../../testFolder/NavbarHome.jsx";
import Footer from "../display/Footer.jsx";
import {Navbar} from "react-bootstrap";
import NavBar from "../display/NavBar.jsx";
import {useNavigate} from "react-router-dom";
import "../../styles/cryptofy.css";

function ProductsList() {
    const [listProducts, setListProducts] = useState([]);


    const loadAllProducts = async () => {
        //const result = await axios.get("http://10.10.2.114:9403/products/getAllProducts");
        const result = await axios.get("http://localhost:9403/products/getAllProducts");
        console.log(result.data)
        setListProducts(result.data);
    };

    useEffect(() => {
        console.log("Chargement des produits...");
        loadAllProducts();
    }, []);

    const handleBuy = () => {
        // TODO API
    }

    const handleUpdate = async (id) => {
        const name = prompt("Nouveau nom du produit :");
        const desc = prompt("Nouvelle description :");
        const price = prompt("Prix :");
        const stock = prompt("Stock :");
        const category = prompt("Catégorie : ")
        const image = prompt("Lien de l'image : ")
        if (!name || !desc || !price || !stock || !category || !image) return;

        try {
            //await axios.put(`http://10.10.2.114:9403/products/update/${id}`, {
             await axios.put(`http://localhost:9403/products/update/${id}`, {
                productName: name,
                productDescription: desc,
                productPrice: price,
                productStock: stock,
                 productCategory: category,
                 imageUrl: image

             });
            alert("Produit mis à jour !");
            loadAllProducts();
        } catch (err) {
            alert("Erreur de mise à jour: " + (err.response?.data?.message || "Erreur inconnue"));
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Supprimer ce produit ?")) return;

        try {
            //await axios.delete(`http://10.10.2.114:9403/products/delete/${id}`);
            await axios.delete(`http://localhost:9403/products/delete/${id}`);
            alert("Produit supprimé !");
            loadAllProducts();
        } catch (err) {
            console.error(err);
            alert("Erreur de suppression: " + (err.response?.data?.message || "Erreur inconnue"));
        }
    };

    const navigate = useNavigate();

    const navigateToCreation = () => {
        navigate('/addProduct');
    };




    return (
        <div className="mt-5 container">
            <NavBar/>
            <div className="card">
                <button className="btn btn-outline-info" onClick={navigateToCreation}>Ajouter votre produit</button>
                <div className='card-header'>
                    Liste des Produits:
                </div>
                <div className='card-body'>
                    <table className='table table-hover'>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Desc</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Category</th>
                            <th>Buy Now</th>
                            <th>Image</th>


                        </tr>
                        </thead>
                        <tbody>
                        {
                            listProducts.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.productName}</td>
                                    <td>{data.productDescription}</td>
                                    <td>{data.productPrice}</td>
                                    <td>{data.productStock}</td>
                                    <td>{data.productCategory}</td>
                                    <td>{data.imageUrl}</td>
                                    <td>
                                        <button className="btn btn-sm btn-primary me-2" onClick={handleBuy}>Buy</button>
                                        <button className="btn btn-sm btn-warning me-2"
                                                onClick={() => handleUpdate(data.idProduct)}>Modifier
                                        </button>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleDelete(data.idProduct)}
                                        >
                                            Supprimer
                                        </button>
                                    </td>

                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            <><Footer/></>
        </div>

    );
}

export default ProductsList;

