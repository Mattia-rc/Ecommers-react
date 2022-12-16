import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { item } from "../mocks/item.mock"
import { Link } from 'react-router-dom'
import { CartContext } from "../context/cartContext";
import {collection,doc,getDoc,getDocs,getFirestore} from "firebase/firestore"
const ItemListContainer = ({ greeting }) => {
  
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [clicks, setClicks] = useState(0)

  useEffect(()=>{

    const db = getFirestore()
   /*  const itemRef = doc(db, "item", "AP3JUadJ5OpbZ8LPZGyZ");
    getDoc(itemRef).then((snapshot) =>{
      if(snapshot.exists()){
        setProducts([{id: "AP3JUadJ5OpbZ8LPZGyZ", ...snapshot.data()}]);
      }
    }) */
    const itemCollection = collection(db, "item");
    getDocs(itemCollection).then((snapshot)=>{
      const products = snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}))
      setProducts(products)
    })
  }, [])


 /*  useEffect(() => {
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
  }, [category]); */

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
