import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { item } from "../mocks/item.mock"
import { Link } from 'react-router-dom'
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
  <hr />
          <h3 className="productName">{product.name}</h3>
    
            <h4 className="productName">{product.description}</h4>
      {/*     <button className="botonClass" onClick={() => {
            
            setClicks(clicks + 1)

          }}>Agregar Producto</button> */}

         {/*  <button className="botonClass" onClick={() => {

           

          }}>Detalle del producto</button> */}

          <Link to={`/item/${product.id}`}>Ver detalle de producto</Link>
          
        </div>




      )}</div>
    </div>

  )
}



export default ItemListContainer;
