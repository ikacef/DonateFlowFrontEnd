import './App.css'
import Home from "./pages/display/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Charities from "./pages/Charities.jsx";
import Wallet from "./pages/Wallet.jsx";
import NotFound from "./pages/utils/NotFound.jsx";
import {useState} from "react";
import ProductsList from "./pages/store/ProductsList.jsx";
import Test from "./pages/test/Test.jsx";
import TestHome from "./pages/test/testHome.jsx";


function App() {

    //<Route path="/" element={<Login setAuth={setAuth}/>}/>

    const [auth, setAuth] = useState(false);

    return (
        <BrowserRouter>

            <div>

                <Routes>


                    <Route path="/" element={<Home auth={auth} setAuth={setAuth} />} />
                    <Route path="/charity" element={<Charities/>} />
                    <Route path="/wallet" element={<Wallet/>} />
                    <Route path="/store" element={<ProductsList/>} />
                    <Route path="*" element={<NotFound/>} />
                    <Route path="/test" element={<Test/>} />
                    <Route path="/testh" element={<TestHome/>} />

                </Routes>

            </div>

        </BrowserRouter>
    )
}

export default App
