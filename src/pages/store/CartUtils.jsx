import { createContext, useState } from "react";
import {getArticleCatalog} from "./ArticlesCatalog.jsx";



export const CartView = createContext({

    articles: [],
    getItemQuantity: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    deleteItemFromCart: () => {},
    getCartCostTotal: () => {}

});

function  Cart(cart){

    const [cartItems, setCartItems] = useState([]);

    function getItemQuantity(id){
        const quantity = cartItems.find(article => article.id === id)?.quantity;

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
                    article => article.id === id ? {...article, quantity: article.quantity + 1} : article
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
                    article => article.id === id ? {...article, quantity: article.quantity - 1} : article
                )
            )
        }
    }

    function deleteItemFromCart(id){

        setCartItems(
            cartItems => cartItems.filter(article => {
                return article.id != id;
            })
        )
    }

    function getCartCostTotal(){
        let cost = 0;
        cartItems.map((cartItem) => {
            const itemData = getArticleCatalog(cartItem.id);
            cost += (itemData.price * cartItem.quantity);
        });
        return cost;
    }

    const cartViewValue = {
        articles : cartItems,
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