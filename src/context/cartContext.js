

import React from "react";
import { useState, useContext } from "react";

 const CartContext = React.createContext([]);

 export const useCartContext = () => useContext(CartContext); 
    const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    
     

   const addProduct = (item,cant) =>{
        const newCart = cart.filter(prod => prod.id !== item.id);
        const product =cart.find(e=>e.id===item.id);
        if(isInCart(item.id)){
            newCart.push({...product,cantidad:product.cantidad+cant})
        }else{
            newCart.push({...item,cantidad:item.cantidad+cant})
        }
        setCart(newCart);
    } 

    
    console.log('carrito: ', cart);
    
    const clearCart = () => setCart([]);


    const isInCart = (id)  => {
        return cart.find(product => product.id === id) ? true : false;

    }


    const removeProduct = (id)  => setCart(cart.filter(product => product.id !== id));

    return(
            <CartContext.Provider value={{
                clearCart,
                isInCart,
                removeProduct,
                cart,
                addProduct
                
            }}>
                {children}
            </CartContext.Provider>
    )
}

export default CartProvider;