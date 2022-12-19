
import { useCartContext } from "../context/cartContext";
import { useState } from "react";
import {collection, addDoc, serverTimestamp, doc, updateDoc,getFirestore} from "firebase/firestore"
const FinalizarCarrito = () => {
    const {cart} = useCartContext()
    
   

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
            email: comprador,
            telefono: comprador,
            item: cart,
            date: serverTimestamp()

        } )
    }

    return(
            
        <div >
            <h1>Ecommerse-Bgn</h1>
            <div className="displayInput">
            <input className="form-control" type="text" placeholder='Nombre y Apellido' name="name" onChange={datosComprador}/>
            <input className="form-control" type="text" placeholder="Ingrese su Email" name="name" onChange={datosComprador} />
            <input className="form-control" type="number" placeholder="Ingrese su Email" name="name" onChange={datosComprador} />
            </div>

            <div>
              <h3>Su item seleccionado es:</h3> {cart.map(product=>(

                  <h4> {product.name}, cantidad: {product.cantidad} </h4>
                

                ))} 
            </div>


                    <div>
                        <button className="inputFinalizar"  onClick={FinalizarCompra}>
                            Finalizar Compra
                        </button>
                    </div>

        </div>
        


    )
}
export default FinalizarCarrito;