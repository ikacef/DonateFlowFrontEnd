import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import {CartView} from "./CartUtils.jsx";
import {getItemCatalog} from "./itemsCatalog.jsx";


function CartItem(props){

    const cart = useContext(CartView);
    const id = props.id;
    const quantity = props.quantity;
    const itemData = getItemCatalog(id);

    return(

        <>
            <h3>{itemData.title}</h3>
            <p>{quantity} total</p>
            <p>${(quantity * itemData.price).toFixed(2)}</p>
            <Button size="sm" onClick={() => cart.deleteItemFromCart(id)}>Remove</Button>
            <hr/>
        </>

    )

}export default CartItem