import "react";
import "../../styles/store.css";

import visa from "../../../../DonateFlowBackEnd/data/img/visa.jpg";
import wallet from "../../../../DonateFlowBackEnd/data/img/wallet.jpg";
import bottle from "../../../../DonateFlowBackEnd/data/img/bottle.jpg";
import soccerball from "../../../../DonateFlowBackEnd/data/img/soccerball.jpg";
import monitor from "../../../../DonateFlowBackEnd/data/img/monitor.jpg";
import backpack from "../../../../DonateFlowBackEnd/data/img/backpack.jpg";

function Store() {

    const handleBuy = () => {

        alert("allo");

    }

    return (


        <div className="card-group">

            <div className="card" id="card1">
                <div className="card-body">
                    <h5 className="card-title">Visa gift card</h5>
                    <p className="card-text">Prepaid visa card with unlimited benefits and a value of a hundred
                        dollars.</p>
                </div>
                <img src={visa} className="card-img-top" id="img1"/>
                <div className="card-footer">
                    <small className="text-body-secondary">In stock - Price : 100.00$</small>
                    <button className="buyButton" onClick={handleBuy}>Add produit</button>
                </div>
            </div>


            <div className="card" id="card2">
                <div className="card-body">
                    <h5 className="card-title">Card wallet</h5>
                    <p className="card-text">An aestethically pleasing wallet with futuristic features containing ample
                        card space while maintaining a low transport volume</p>
                </div>
                <img src={wallet} className="card-img-top" alt="..."/>
                <div className="card-footer">
                    <small className="text-body-secondary">In stock - Price : 15.00$</small>
                    <button className="buyButton" onClick={handleBuy}>Buy</button>
                </div>
            </div>


            <div className="card" id="card3">
                <div className="card-body">
                    <h5 className="card-title">Flow water 50 pack</h5>
                    <p className="card-text">Exclusive pack format in sponsorship with the Flow water beverage company
                        and a limited edition flavor. Get it while you can !!!</p>
                </div>
                <img src={bottle} className="card-img-top" alt="..."/>
                <div className="card-footer">
                    <small className="text-body-secondary">In stock - Price : 45.00$</small>
                    <button className="buyButton" onClick={handleBuy}>Buy</button>
                </div>
            </div>


            <div className="card" id="card4">
                <div className="card-body">
                    <h5 className="card-title">Signed soccer ball</h5>
                    <p className="card-text">Famous soccer player and all-time great Pele signed soccer ball from his
                        infamous 8 goal game.</p>
                </div>
                <img src={soccerball} className="card-img-top" alt="..."/>
                <div className="card-footer">
                    <small className="text-body-secondary">In stock - Price : 200.00$</small>
                    <button className="buyButton" onClick={handleBuy}>Buy</button>
                </div>
            </div>


            <div className="card" id="card5">
                <div className="card-body">
                    <h5 className="card-title">LG UltraGear monitor</h5>
                    <p className="card-text">Newest generation Lg UltraGear monitor with advanced graphic display
                        and latest technology graphic resolution tailord for hig-level gaming or streaming</p>
                </div>
                <img src={monitor} className="card-img-top" alt="..."/>
                <div className="card-footer">
                    <small className="text-body-secondary">In stock - Price : 500.00$</small>
                    <button className="buyButton" onClick={handleBuy}>Buy</button>
                </div>
            </div>


            <div className="card" id="card6">
                <div className="card-body">
                    <h5 className="card-title">Crypto backpack</h5>
                    <p className="card-text">Crypto designed backpack for crypto fans or users with a unique color scheme. LIMITED EDITION ***</p>
                </div>
                <img src={backpack} className="card-img-top" alt="..."/>
                <div className="card-footer">
                    <small className="text-body-secondary">In stock - Price : 15.00$</small>
                    <button className="buyButton" onClick={handleBuy}>Buy</button>
                </div>
            </div>

        </div>

    )

}
export default Store