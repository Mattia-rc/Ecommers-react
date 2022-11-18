import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { item } from "../mocks/item.mock"

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [clicks, setClicks] = useState(0)
  useEffect(() => {
    new Promise((resolve) => setTimeout(() => {
      resolve(item);
    }, 3000)).then((data) => setProducts((data)))
  }, [])

  return (
    <div>
      {<h2 className="texth2">{greeting}</h2>}

      <div className="flex_productos">{products.map((product) =>

        <div className="img_edit"><img src={product.img} />

          <h3>{product.nombre}</h3>
          <p>el stock disponibles es de: {product.stock}</p>

          <button className="botonClass" onClick={() => {
            
            setClicks(clicks + 1)

          }}>Agregar Producto</button>

          <button className="botonClass" onClick={() => {

            <div className="box_productos">

            </div>


          }}>Ver mas Información</button>


        </div>




      )}</div>
    </div>

  )
}



export default ItemListContainer;
