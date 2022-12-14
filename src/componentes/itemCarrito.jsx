
import { useCartContext } from "../context/cartContext";

import {FaTrashAlt} from 'react-icons/fa'
const ItemCarrito = () =>{
    const {cart,clearCart, removeProduct} = useCartContext(); 
return(
    <div>
        {
            cart.length===0?<h1>Carrito Vacio</h1>:
            cart.map(product=>(
                <div>
                    <FaTrashAlt onClick={()=>removeProduct(product.id)}/>
                    <h1>{product.name}</h1>
                    <img  src={product.img} />
                    <h3>{product.description}</h3>
                    <h4> {product.cantidad} </h4>
                </div>
            ))
        }
    </div>
)   

}

export default ItemCarrito