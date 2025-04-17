import "react"
import NavbarHome from "./display/NavbarHome.jsx";
import Footer from "./display/Footer.jsx";
import "../styles/charities.css"

const Charities = () => {
    return (

        <div className="main">

            <><NavbarHome/></>

            <div className="charitiesMain container py-4">
                {/* Search and Filters */}
                <div className="row align-items-center mb-4">
                    <div className="col-md-6 mb-2 mb-md-0">
                        <input type="text" className="form-control" placeholder="Search charities..." />
                    </div>
                    <div className="col-md-3 mb-2 mb-md-0">
                        <select className="form-select">
                            <option>All Categories</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <select className="form-select">
                            <option>Sort by: Most Popular</option>
                        </select>
                    </div>
                </div>

                {/* Charity Cards */}
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card h-100">
                            <div className="position-relative">
                                <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Save the Children" />
                                <span className="badge bg-success position-absolute top-0 end-0 m-2">Verified</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Save the Children</h5>
                                <p className="text-muted">🌐 Global Initiative</p>
                                <span className="badge bg-primary mb-2">2x Rewards</span>
                                <p className="card-text">
                                    Providing education, healthcare, and emergency aid to children in need worldwide.
                                </p>
                                <p><strong>Raised:</strong> $1.2M / $2M</p>
                                <button className="btn btn-primary w-100">Donate Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100">
                            <div className="position-relative">
                                <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Green Earth Project" />
                                <span className="badge bg-success position-absolute top-0 end-0 m-2">Verified</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Green Earth Project</h5>
                                <p className="text-muted">🌱 Environmental</p>
                                <span className="badge bg-primary mb-2">1.5x Rewards</span>
                                <p className="card-text">
                                    Protecting forests and wildlife through conservation efforts and community engagement.
                                </p>
                                <p><strong>Raised:</strong> $800K / $1M</p>
                                <button className="btn btn-primary w-100">Donate Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card h-100">
                            <div className="position-relative">
                                <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Global Health Initiative" />
                                <span className="badge bg-success position-absolute top-0 end-0 m-2">Verified</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Global Health Initiative</h5>
                                <p className="text-muted">🏥 Healthcare</p>
                                <span className="badge bg-primary mb-2">3x Rewards</span>
                                <p className="card-text">
                                    Providing essential medical care and supplies to underserved communities globally.
                                </p>
                                <p><strong>Raised:</strong> $500K / $1.5M</p>
                                <button className="btn btn-primary w-100">Donate Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Load More Button */}
                <div className="text-center my-4">
                    <button className="btn btn-outline-primary">Load More Charities</button>
                </div>
            </div>

            <><Footer/></>

        </div>

    );
};

export default Charities;

