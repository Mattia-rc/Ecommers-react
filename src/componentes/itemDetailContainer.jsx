import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { item, item as itemMock } from "../mocks/item.mock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [desc, setDesc] = useState({});
  const {id} = useParams();

  useEffect(() => {

    new Promise((resolve) => setTimeout(() => resolve(itemMock[0]))).then(
      (data) => {

        if(desc){
          const items = item.find(
            (product)=> product.id === id
          );
          setDesc(items)
        }else {
          setDesc(data);
        }
      } 
    );
  }, []);

  




  return <ItemDetail desc = {desc} />


};

export default ItemDetailContainer;