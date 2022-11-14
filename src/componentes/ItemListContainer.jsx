import React, { useState } from "react";
const Productos = [

  { id: 1, nombre: "Teclado", stock: 4, img: "https://http2.mlstatic.com/D_NQ_NP_649496-MLA51811501299_102022-O.jpg" },
  { id: 2, nombre: "Mouse", stock: 3, img: "https://medias.musimundo.com/medias/00181095-136169-136169-01-136169-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1OTQ4M3xpbWFnZS9qcGVnfGhlOS9oMDIvMTAzNzg4NzU3NjQ3NjYvMDAxODEwOTUtMTM2MTY5LTEzNjE2OV8wMS0xMzYxNjlfMDEuanBnX3NpemU1MTV8ZTdhMzk0ZTA2MDNhNWE0ZWMwMWNjNWJjMTVhZWVjNzUwMzZlMmMzMTQ4Mzg3MzQ0NmI0YjlkZjIyYjQwM2YzZA" },
  { id: 3, nombre: "MousePad", stock: 5, img: "https://http2.mlstatic.com/D_NQ_NP_634717-MLA40721130270_022020-O.webp" },
  { id: 4, nombre: "Monitor", stock: 10, img: "https://http2.mlstatic.com/D_NQ_NP_973781-MLA48131216539_112021-O.webp" }

]

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  const [clicks, setClicks] = useState(0)
  const productList = new Promise((resolve) => setTimeout(() => {
    resolve(Productos);
  }, 3000))

  productList.then((data) => setProducts((data)))

  function pantalla() {
    
  }
  return (

    <div>
      {<h2 className="texth2">{greeting}</h2>}
      {/*      <ul>{products.map((product)=> <li>{product.nombre}</li>)}</ul> 
 */}

      <div className="flex_productos">{products.map((product) =>


        <div className="img_edit"><img src={product.img} />

          <h3>{product.nombre}</h3>
          <p>el stock disponibles es de: {product.stock}</p>

          <button className="botonClass" onClick={()=>{

            console.log(product);
            setClicks(clicks + 1) 
            
          }}>Agregar Productos</button>

          <p>{clicks}</p>
          
        </div>

          


      )}</div>
    </div>

  )
}



export default ItemListContainer;
