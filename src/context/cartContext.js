import React,{ createContext, useState } from "react";
import { item } from "../mocks/item.mock";

export const Context = createContext();


export const CartContextProvider = ({children})=>{
    const [carrito, setCarrito] = useState([])
    
    function addItem(item){
         setCarrito(carrito.push(item));
    }

    function removeItem(itemID){
        setCarrito(carrito.filter((item)=>item.id !== itemID));
    }


    function clear(){
        setCarrito([]); 
    }

    function isInCart(itemID){
        return Boolean(carrito.find((item)=>item.id === itemID))
    }
    return(
        <Context.Provider value={{clear, removeItem, addItem, isInCart}}>

        {children}

        </Context.Provider>
    )
}