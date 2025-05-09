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
        const result = await axios.get("http://localhost:8181/products/getAllProducts");
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



    return (
        <div className="mt-5 container">
            <><NavbarHome/>v</>
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
                                    <td>{data.name}</td>
                                    <td>{data.description}</td>
                                    <td>{data.price}</td>
                                    <td>{data.stock}</td>
                                    <td>{data.category}</td>
                                    <button onClick={handleBuy}>Buy</button>
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

