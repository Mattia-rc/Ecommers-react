
import { useCartContext } from "../context/cartContext";
import { useState } from "react";
import {collection, addDoc, serverTimestamp, doc, updateDoc,getFirestore} from "firebase/firestore"
const FinalizarCarrito = () => {
    const {cart} = useCartContext()
    console.log(cart);
   

    const db = getFirestore();
    const [comprador, setComprador]= useState({})

  
    const datosComprador = (e)=> {
        setComprador({
            ...comprador,
           [e.target.name]:e.target.value
        })
    }



    const FinalizarCompra = () =>{
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, {
            comprador: comprador,
            item: cart,
            date: serverTimestamp()

        } )
    }

    return(
           
        <div>
            <div>
            <input className="form-control" type="text" placeholder='Nombre y Apellido' name="name" onChange={datosComprador}/>

            </div>

            <div>
                su item seleccionado es: {cart.map(product=>(

                  <h4> {product.name}, cantidad: {product.cantidad} </h4>
                

                ))} 
            </div>


                    <div>
                        <button onClick={FinalizarCompra}>
                            Finalizar Compra
                        </button>
                    </div>

        </div>
        


    )
}
export default FinalizarCarrito;