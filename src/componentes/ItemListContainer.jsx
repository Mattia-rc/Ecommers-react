import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { item } from "../mocks/item.mock"

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [clicks, setClicks] = useState(0)
  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(item);
      }, 2000)
    ).then((data) => {
      if (category) {
        const categories = data.filter(
          (product) => product.category === category
        );
        setProducts(categories);
      } else {
        setProducts(data);
      }
    });
  }, [category]);

  if (products.length === 0) {
    return <p>Loading...</p>;
  }


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
