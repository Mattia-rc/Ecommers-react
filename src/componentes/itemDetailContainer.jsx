import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { item, item as itemMock } from "../mocks/item.mock";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [desc, setDesc] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const db = getFirestore()
      const itemRef = doc(db, "item", id);
    getDoc(itemRef).then((snapshot) =>{
      if(snapshot.exists()){
        setDesc({id: snapshot.id, ...snapshot.data()});
      }
    }) 
  }, [id]);

  




  return <ItemDetail desc = {desc} />


};

export default ItemDetailContainer;