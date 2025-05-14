 import './App.css'
import Home from "./pages/display/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Campaigns from "./pages/store/Campaigns.jsx";
import Wallet from "./pages/clientInfo/Wallet.jsx";
import NotFound from "./pages/utils/NotFound.jsx";
import ProductsList from "./pages/store/ProductsList.jsx";
import Login from "./pages/clientInfo/Login.jsx"
 import AddCampaign from "./pages/store/AddCampaign.jsx";
 import RoutePrivate from "./pages/utils/RoutePrivate.jsx";
 import ZeffyProducts from "./pages/store/ZeffyProducts.jsx";
 import About from "./pages/doc/About.jsx";
 import HowIW from "./pages/doc/HowIW.jsx";
 import Documentation from "./pages/doc/Documentation.jsx";
 import Support from "./pages/doc/Support.jsx";


function App() {




    return (
        <BrowserRouter>

            <div>


                <Routes>
                    <Route path="/login" element={<Login />} />

                    <Route path="/" element={<Home />}/>

                    <Route path="/campaign" element={
                        <RoutePrivate>
                            <Campaigns />
                        </RoutePrivate>
                    }/>

                    <Route path="/wallet" element={
                        <RoutePrivate>
                            <Wallet />
                        </RoutePrivate>
                    }/>

                    <Route path="/store" element={
                        <RoutePrivate>
                            <ProductsList />
                        </RoutePrivate>
                    }/>

                    <Route path="/add" element={
                        <RoutePrivate>
                            <AddCampaign />
                        </RoutePrivate>
                    }/>

                    <Route path="/about" element={<About />} />
                    <Route path="/how" element={<HowIW />} />
                    <Route path="/doc" element={<Documentation />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>





            </div>

        </BrowserRouter>
    )
}

export default App



