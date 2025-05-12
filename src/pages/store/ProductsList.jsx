import {useState, useEffect} from 'react';
import axios from 'axios';
import NavbarHome from "../display/NavbarHome.jsx";
import Footer from "../display/Footer.jsx";


function ProductsList() {
    const [listProducts, setListProducts] = useState([]);

    /**
     const loadAllCustomers2 = () => {
     axios.get("http://localhost:8888/reda/getAllCustomers")
     .then(res => setCustomers(res.data))
     .catch(err => console.log(err));
     }
     */

    const loadAllProducts = async () => {
        const result = await axios.get("http://10.10.2.114:8982/products/getAllProducts");
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

    const handleUpdate = async () => {
        const name = prompt("Nouveau nom du produit :");
        const desc = prompt("Nouvelle description :");
        const price = prompt("Prix :");
        const stock = prompt("Stock :");
        if (!name || !desc || !price || !stock) return;

        try {
            await axios.put(`http://10.10.2.114:8982/products/update`, {
                productName: name,
                productDescription: desc,
                productPrice: price,
                productStock: stock
            });
            alert("Produit mis à jour !");
            loadAllProducts();
        } catch (err) {
            alert("Erreur de mise à jour: " + err.response?.data);
        }
    };

    const handleDelete = async () => {
        if (!window.confirm("Supprimer ce produit ?")) return;

        try {
            await axios.delete(`http://10.10.2.114:8982/products/delete`);
            alert("Produit supprimé !");
            loadAllProducts();
        } catch (err) {
            alert("Erreur de suppression: " + err.response?.data);
        }
    };




    return (
        <div className="mt-5 container">
            <NavbarHome/>
            <div className="card">
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
                                    <td>
                                        <button className="btn btn-sm btn-primary me-2" onClick={handleBuy}>Buy</button>
                                        <button className="btn btn-sm btn-warning me-2"
                                                onClick={() => handleUpdate(data.id)}>Modifier
                                        </button>
                                        <button className="btn btn-sm btn-danger"
                                                onClick={() => handleDelete(data.id)}>Supprimer
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

