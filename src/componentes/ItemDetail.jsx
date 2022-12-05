import { useState } from "react";

const ItemDetail = ({ desc }) => {
  const [clicks, setClicks] = useState(0)
  const [carrito, setCarrito] = useState([])
    function sumarContador(){
      if(clicks<desc?.stock){
        setClicks(clicks+1)
      }else{
        console.log("se ha superado el stock");
      }
    }

    function restarContador (){
      if(clicks> 0){
        setClicks(clicks-1);
      }
    }


    function addItem(){
      setCarrito(carrito.push(desc)); 
        console.log(carrito);
 }

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
            <h5> El stock disponible es de: {desc?.stock} </h5>
              <div className="flex_button">
                <button onClick={()=>
                 sumarContador()
                }>+</button>
                <p>has seleccionado {clicks} {desc?.name} </p>
                <button onClick={()=>
                  restarContador()
                }>-</button>
              </div>
              <button className="btnCarrito" onClick={()=>
                  
                  addItem()
                
              }>Agregar al carrito</button>
          </div>
    </div>
  );
};

export default ItemDetail;