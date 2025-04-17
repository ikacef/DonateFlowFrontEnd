import {useState, useEffect} from 'react';
import axios from 'axios';


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
        const result = await axios.get("http://localhost:8585/product/getAllProducts");
        console.log(result.data)
        setListProducts(result.data);
    };

    useEffect(() => {
        loadAllProducts();
    }, []);




    return (
        <div className="mt-5 container">
            <div className="card">
                <div className='card-header'>
                    Liste des Customers:
                </div>
                <div className='card-body'>
                    <table className='table table-hover'>
                        <thead>
                        <tr>
                            <th>pName</th>
                            <th>pDesc</th>
                            <th>pPrice</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            listProducts.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.productName}</td>
                                    <td>{data.productDescription}</td>
                                    <td>{data.productPrice}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default ProductsList;

/**
 *   useEffect(() => {
 *         axios.get("https://jsonplaceholder.typicode.com/users")
 *             .then(res => setTabUsers(res.data))
 *             .catch(err => console.log(err));
 *     },
 *       []);
 */