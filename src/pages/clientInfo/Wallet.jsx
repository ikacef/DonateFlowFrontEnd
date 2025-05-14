import  'react';
import "../../styles/wallet.css"
import NavbarHome from "../../testFolder/NavbarHome.jsx";
import Footer from "../display/Footer.jsx";
import Navtest from "../display/NavBar.jsx";
import NavBar from "../display/NavBar.jsx";

/* Code fait uniquement par jayden*/
const Wallet = () => {


    return (

        <div className="main">
            <NavBar/>
            <div className="walletMain container mt-5">
                <h2 className="text-center mb-4">My Wallet</h2>

                {/* Solde */}
                <div className="row mb-4">
                    <div className="col-md-6">
                        <div className="card p-3 shadow-sm">
                            <div className="d-flex align-items-center">
                                <i className="bi bi-credit-card-2-front fs-1 me-3 text-success"></i>
                                <div>
                                    <h5>Debit Balance</h5>
                                    <p className="fs-4 mb-0"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card p-3 shadow-sm">
                            <div className="d-flex align-items-center">
                                <i className="bi bi-currency-bitcoin fs-1 me-3 text-primary"></i>
                                <div>
                                    <h5>Crypto Balance</h5>
                                    <p className="fs-4 mb-0"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Infos utilisateur */}
                <div className="card shadow-sm mb-4">
                    <div className="card-body">
                        <h5 className="card-title"><i className="bi bi-person-circle me-2"></i>User Information</h5>
                        <p><strong>Name:</strong> </p>
                        <p><strong>Email:</strong></p>
                        <p><strong>Member Since:</strong> </p>
                    </div>
                </div>

                {/* Filtres */}
                <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title mb-3"><i className="bi bi-funnel-fill me-2"></i>Filters</h5>
                        <div className="row">
                            <div className="col-md-6 mb-2">
                                <label className="form-label">Payment Method</label>

                            </div>
                            <div className="col-md-6 mb-2">
                                <label className="form-label">Status</label>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Transactions */}
                <div className="card shadow-sm mb-3">
                    <div className="card-body">
                        <h5 className="card-title mb-3"><i className="bi bi-clock-history me-2"></i>Transaction History
                        </h5>
                        <div className="table-responsive">

                        </div>

                    </div>
                </div>

            </div>
            <><Footer/></>
        </div>
    );
};

export default Wallet;
