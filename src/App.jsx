import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import testCreateUser from "./testFolder/testCreateUser.jsx";
import Footer from "./pages/Footer.jsx";


function App() {


  return (
  /*  <Router>
      <Routes>

        <Route path={"/"} element={Home}/>

        <Route path={"/add"} element={testCreateUser}/>

        <Route path={"*"} element={NotFound}/>

      </Routes>
    </Router>
    */
    <Footer/>
  )
}

export default App
