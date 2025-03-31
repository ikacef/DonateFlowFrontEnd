import {Row,Col} from "react-bootstrap";
import itemsCatalog from "./itemsCatalog.jsx";


function Store_(){

    return(

        <>

            <h1 className="storeTitle">Donatflow boutique</h1>
            <Row xs={1} md={3} className="itemsRow">
                {itemsCatalog.map((item,idx) =>
                    <Col key={idx}>
                        // TODO
                    </Col>
                )}



            </Row>



        </>


    )

}