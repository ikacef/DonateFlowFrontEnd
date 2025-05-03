 import './App.css'
import Home from "./pages/display/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Campaigns from "./pages/Campaigns.jsx";
import Wallet from "./pages/Wallet.jsx";
import NotFound from "./pages/utils/NotFound.jsx";
import {useState} from "react";
import ProductsList from "./pages/store/ProductsList.jsx";
import Login from "./pages/Login.jsx";
 import CreateCampaign from "./pages/utils/AddCampaign.jsx";
 import AddCampaign from "./pages/utils/AddCampaign.jsx";


function App() {


    const [auth, setAuth] = useState(false);

    return (
        <BrowserRouter>

            <div>

                <Routes>

                    <Route path="/*" element={<Login auth={auth} setAuth={setAuth}/>}/>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/campaign" element={<Campaigns/>} />
                    <Route path="/wallet" element={<Wallet/>} />
                    <Route path="/store" element={<ProductsList/>} />
                    <Route path="/add" element={<AddCampaign/>} />
                    <Route path="*" element={<NotFound/>} />

                </Routes>

            </div>

        </BrowserRouter>
    )
}

export default App
