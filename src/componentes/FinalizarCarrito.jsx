
import { useCartContext } from "../context/cartContext";
import { useState } from "react";
import {collection, addDoc, serverTimestamp, doc, updateDoc,getFirestore} from "firebase/firestore"
import Swal from "sweetalert2"
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

    const mostrarAlerta = () => {
        Swal.fire(
            'Compra realizada',
            'Muchisimas gracias por confiar en nosotros!!',
            'success'
          )
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
        mostrarAlerta();

    }

    return(
            
        <div className="display-flex-completo">
            <div>
            <h1>Formulario de compra</h1>
            <div className="displayInput">
            <input className="form-control" type="text" placeholder='Nombre y Apellido' name="name" onChange={datosComprador}/>
            <input className="form-control" type="text" placeholder="Ingrese su Email" name="name" onChange={datosComprador} />
            <input className="form-control" type="tel" placeholder="Ingrese su telefono" name="name" onChange={datosComprador} />
            </div>

            </div>
            <div>

                    <h2>Detalle de su compra:</h2>


              <h4>Su producto seleccionado es:</h4> {cart.map(product=>(
           
              
                   <h3>{product.description}, cantidad: {product.cantidad}</h3>
               
                ))} 
            

           
             
           


                   
                        <button className="inputFinalizar" onClick={FinalizarCompra}>
                            Finalizar Compra
                        </button>
                    </div>

        </div>
        


    )
}
export default FinalizarCarrito;