import {useEffect} from 'react';
import axios from 'axios';
import NavbarHome from "../../testFolder/NavbarHome.jsx";
import Footer from "../display/Footer.jsx";
import NavBar from "../display/NavBar.jsx";

/* Code fait uniquement par nassim*/
function ZeffyProducts() {


    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-script.min.js";
        script.defer = true;
        document.body.appendChild(script);

        return() => {
            document.body.removeChild(script);
        }
    }, []);




    return (
        <div >
            <><NavBar/>v</>
            <div className="container my-5">
                <h2 className="text-center mb-4">Support Us via Zeffy</h2>
                <div className='card-header'
                     style={{
                         position: "relative",
                         overflow: "hidden",
                         height: "630px",
                         width: "100%",
                         paddingTop: "630px",
                     }}
                >
                    <iframe
                        title="Donation form powered by Zeffy"
                        style={{
                            position: "absolute",
                            border: "0",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            width: "100%",
                            height: "100%",
                        }}
                        src="https://www.zeffy.com/embed/ticketing/cryptofy"
                        allow="payment"
                        allowTransparency={true}
                    ></iframe>
                </div>
            </div>
            <><Footer/></>
        </div>
    );
}

export default ZeffyProducts;

