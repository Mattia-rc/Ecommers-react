import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { item } from "../mocks/item.mock"
import { Link } from 'react-router-dom'
import { CartContext } from "../context/cartContext";
import ItemList from "./ItemList"
import {collection,doc,getDoc,getDocs,getFirestore, query,
  where} from "firebase/firestore"
  import { Loading } from "../componentes/Loading";
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
    return <Loading />;
  }



  return (
      
      <ItemList products = {products} />

  )
}



export default ItemListContainer;
