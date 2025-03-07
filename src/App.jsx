import './App.css'
import Home from "./pages/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Charities from "./pages/Charities.jsx";
import Wallet from "./pages/Wallet.jsx";
import Store from "./pages/Store.jsx";
import NotFound from "./pages/NotFound.jsx";


function App() {


    return (
        <BrowserRouter>

            <div>

                <Routes>

                    <Route path="/" element={<Home/>} />
                    <Route path="/charity" element={<Charities/>} />
                    <Route path="/wallet" element={<Wallet/>} />
                    <Route path="/store" element={<Store/>} />
                    <Route path="*" element={<NotFound/>} />

                </Routes>

            </div>
        </BrowserRouter>
    )
}

export default App
