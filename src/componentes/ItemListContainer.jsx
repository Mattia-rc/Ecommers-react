import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { item } from "../mocks/item.mock"
import { Link } from 'react-router-dom'
import { CartContext } from "../context/cartContext";
import {collection,doc,getDoc,getDocs,getFirestore, query,
  where} from "firebase/firestore"
const ItemListContainer = ({ greeting }) => {
  
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [clicks, setClicks] = useState(0)

  useEffect(() => {


    if (!category) {
      const db = getFirestore();

      const itemsCollection = collection(db, "item");
      getDocs(itemsCollection).then((result) =>
        setProducts(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
    } else {
      const db = getFirestore();

      const q = query(
        collection(db, "item"),
        where("category", "==", category)
      );
      getDocs(q).then((result) =>
        setProducts(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
    }
  }, [category]);



  if (products.length === 0) {
    return <p>cargando....  </p>;
  }



  return (
    <div>
      {<h2 className="texth2">{greeting}</h2>}

      <div className="flex_productos">{products.map((product) =>

        <div className="img_edit"><img src={product.img} />
          <hr />
          <h3 className="productName">{product.name}</h3>

          <h4 className="productName">{product.description}</h4>


          <Link className="editTextLink" to={`/item/${product.id}`}>Ver detalle de producto</Link>
          
        </div>
      )}</div>
    </div>

  )
}



export default ItemListContainer;
