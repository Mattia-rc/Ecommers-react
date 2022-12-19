
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import {FaTrashAlt} from 'react-icons/fa'
const ItemCarrito = () =>{
    const {cart,clearCart, removeProduct} = useCartContext(); 
return(
    <div>
        {
            cart.length===0?<h1>UPSS!!... Todavia no has seleccionado ningun producto. <Link to="/">Ver productos de la tienda</Link></h1>:
            cart.map(product=>(
                <div className="flexColumn">

                        <div className="img_editt">
                        <FaTrashAlt className="iconEdit" onClick={()=>removeProduct(product.id)}/>
                    
                       

                    <img  src={product.img} />
                    <h1>{product.name}</h1>
                    <h3>{product.description}</h3>
                    <h4> {product.cantidad} </h4>
                    </div>
                </div>
            ))
                
            
        }
        <div>
            <button onClick={()=>clearCart()}>
                Borrar productos del Carrito
            </button>

            <Link to="/finalizar/">Continuar con la Compra</Link>

        </div>

    </div>
)   

}

export default ItemCarrito