 import './App.css'
import Home from "./pages/display/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Charities from "./pages/Charities.jsx";
import Wallet from "./pages/Wallet.jsx";
import NotFound from "./pages/utils/NotFound.jsx";
import {useState} from "react";
import ProductsList from "./pages/store/ProductsList.jsx";
import Login from "./pages/Login.jsx";


function App() {


    const [auth, setAuth] = useState(false);

    return (
        <BrowserRouter>

            <div>

                <Routes>

                    <Route path="/*" element={<Login auth={auth} setAuth={setAuth}/>}/>
                    <Route path="/" element={<Home/>} />
                    <Route path="/charity" element={<Charities/>} />
                    <Route path="/wallet" element={<Wallet/>} />
                    <Route path="/store" element={<ProductsList/>} />
                    <Route path="*" element={<NotFound/>} />

                </Routes>

            </div>

        </BrowserRouter>
    )
}

export default App
