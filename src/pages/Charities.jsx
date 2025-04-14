import "react"

function Charities(){

    import React from 'react';

    const charities = [
        {
            id: 1,
            name: "Hope for All",
            description: "Providing essential supplies to communities in need.",
            imageUrl: "https://via.placeholder.com/300x200",
        },
        {
            id: 2,
            name: "Green Earth",
            description: "Supporting reforestation and climate action projects.",
            imageUrl: "https://via.placeholder.com/300x200",
        },
        {
            id: 3,
            name: "Education First",
            description: "Helping children around the world access education.",
            imageUrl: "https://via.placeholder.com/300x200",
        },
    ];

    const Charities = () => {
        return (
            <div className="container mt-5">
                <h2 className="text-center mb-4">Support a Charity</h2>
                <div className="row">
                    {charities.map((charity) => (
                        <div className="col-md-4 mb-4" key={charity.id}>
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={charity.imageUrl}
                                    className="card-img-top"
                                    alt={charity.name}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{charity.name}</h5>
                                    <p className="card-text">{charity.description}</p>
                                    <button className="btn btn-primary mt-auto" disabled>
                                        Donate
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    export default Charities;

}
export default Charities