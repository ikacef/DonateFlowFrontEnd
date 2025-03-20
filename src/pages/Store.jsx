import "react";

function Store(){

    return (

        <div className="card-group">
            <div className="GiftCard">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">$50 Gift Card</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                </div>
            </div>
            <div className="CourseAccess">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="Online Course Access">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional
                        content.</p>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                </div>
            </div>
            <div className="WirelessEarbuds">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Wireless Earbuds</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to show that equal height
                        action.</p>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>

    )

}

export default Store