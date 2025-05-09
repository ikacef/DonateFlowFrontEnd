 import './App.css'
import Home from "./pages/display/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Campaigns from "./pages/display/Campaigns.jsx";
import Wallet from "./pages/clientInfo/Wallet.jsx";
import NotFound from "./pages/utils/NotFound.jsx";
import ProductsList from "./pages/store/ProductsList.jsx";
import Login from "./pages/clientInfo/Login.jsx"
 import AddCampaign from "./pages/functionnalities/AddCampaign.jsx";
 import {AuthProvider} from "./pages/utils/AuthService.jsx";
 import RoutePrivate from "./pages/utils/RoutePrivate.jsx";


function App() {




    return (
        <BrowserRouter>

            <div>


                    <Routes>

                        <Route path="/" element={<Login />}/>
                        <Route path="/home" element={<Home />} />
                        <Route path="/campaign" element={<Campaigns />} />
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



