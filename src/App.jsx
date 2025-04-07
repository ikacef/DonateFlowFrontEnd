import './App.css'
import Home from "./pages/display/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Charities from "./pages/Charities.jsx";
import Wallet from "./pages/Wallet.jsx";
import Store from "./pages/store/Store.jsx";
import NotFound from "./pages/utils/NotFound.jsx";
import Navbar from "./pages/display/Navbar.jsx";
import Footer from "./pages/display/Footer.jsx";
import Login from "./pages/Login.jsx";
import {useState} from "react";
import Store_ from "./pages/store/Store_.jsx";
import ArticleBD from "./pages/store/ArticleBD.jsx";


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
                    <Route path="/store" element={<ArticleBD/>} />
                    <Route path="*" element={<NotFound/>} />

                </Routes>

            </div>

        </BrowserRouter>
    )
}

export default App
