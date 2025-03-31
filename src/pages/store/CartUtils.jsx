import { createContext, useState } from "react";
import {getItemCatalog} from "./itemsCatalog.jsx";



export const CartView = createContext({

    items: [],
    getItemQuantity: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    deleteItemFromCart: () => {},
    getCartCostTotal: () => {}

});

function  Cart(cart){

    const [cartItems, setCartItems] = useState([]);

    function getItemQuantity(id){
        const quantity = cartItems.find(item => item.id === id)?.quantity;

        if (quantity === undefined){
            return 0;
        }

        return quantity
    }

    function addItemToCart(id){
        const quantity = getItemQuantity(id);

        if (quantity === 0){
            setCartItems(
                [
                    ...cartItems,
                    {
                        id: id,
                        quantity:1
                    }
                ]
            )
        }else {
            setCartItems(
                cartItems.map(
                    item => item.id === id ? {...item, quantity: item.quantity + 1} : item
                )
            )
        }
    }

    function removeItemFromCart(id){
        const quantity = getItemQuantity(id);

        if(quantity === 1){
            deleteItemFromCart(id);
        }else {
            setCartItems(
                cartItems.map(
                    item => item.id === id ? {...item, quantity: item.quantity - 1} : item
                )
            )
        }
    }

    function deleteItemFromCart(id){

        setCartItems(
            cartItems => cartItems.filter(item => {
                return item.id != id;
            })
        )
    }

    function getCartCostTotal(){
        let cost = 0;
        cartItems.map((cartItem) => {
            const itemData = getItemCatalog(cartItem.id);
            cost += (itemData.price * cartItem.quantity);
        });
        return cost;
    }

    const cartViewValue = {
        items : cartItems,
        getItemQuantity,
        addItemToCart,
        removeItemFromCart,
        deleteItemFromCart,
        getCartCostTotal
    }

    return(

        <CartView.Provider value={cartViewValue}>
            {cart}
        </CartView.Provider>

    )

}export default Cart