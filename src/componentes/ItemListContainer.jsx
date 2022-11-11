import { useState } from "react";
const Productos = [

  { id: 1, nombre: "teclado", img: "https://http2.mlstatic.com/D_NQ_NP_649496-MLA51811501299_102022-O.webp" },
  { id: 2, nombre: "Mouse" }

]

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);

  const productList = new Promise((resolve) => setTimeout(() => {
    resolve(Productos);
  }, 3000))

  productList.then((data) => setProducts((data)))

  return (

    <div>
      {/*   <h2 className="texth2">{greeting}</h2> */}



      <ul>{products.map((product) =>
      <div>
        <li>
          {product.nombre}
        </li>

        <img src={product.img}/>
        </div>
      )}

      </ul>
    </div>

  )
}

export default ItemListContainer;