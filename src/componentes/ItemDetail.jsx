import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
const ItemDetail = ({ desc }) => {
  const [goToCart, setGoToCart] = useState(false)
  const [clicks, setClicks] = useState(1)
  const [carrito, setCarrito] = useState([])
  const {addProduct} = useCartContext(); 
  



    function sumarContador(){
      if(clicks<desc?.stock){
        console.log(desc.cantidad)
        
        setClicks(clicks+1)
      }else{
        console.log("se ha superado el stock");
      }
    }

    function restarContador (){
      if(clicks> 0){
        desc.cantidad-=clicks
        setClicks(clicks-1);
      }
    }


   /*  const onAdd = (quantity) => {
      addProduct(desc, quantity);
    } */


 function finalizarCompra(){
  <div>
      <button>Finalizar Compra</button>
  </div>
 }
  return (
   
    <div className="imgLeft">
        <img  src={desc?.img} />
          <div>
            <h3 className="editText"> {desc?.name} </h3>
            <h4> {desc?. description} </h4>
            <h2 className="precioEdit"> {desc?.price} </h2>
        
              <div className="flex_button">
                <button onClick={()=>
                 sumarContador()
                }>+</button>
                <p>has seleccionado {clicks} {desc?.name} </p>
                <button onClick={()=>
                  restarContador()
                }>-</button>
              </div>
                <button onClick={()=>addProduct(desc,clicks)}>Agregar al carrito</button>
          </div>
    </div>
  );
};

export default ItemDetail;