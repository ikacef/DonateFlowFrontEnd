import {Row,Col} from "react-bootstrap";
import {articlesCatalog} from "../../testFolder/ArticlesCatalog.jsx"
import Article from "./Article.jsx";


function Store_(){

    return(
        <>

            <h1 className="storeTitle">Donatflow boutique</h1>
            <Row xs={1} md={3} className="itemsRow">
                {articlesCatalog.map((article,idx) =>
                    <Col key={idx}>
                        <Article article={article}/>
                    </Col>
                )}
            </Row>

        </>
    )
}
export default Store_