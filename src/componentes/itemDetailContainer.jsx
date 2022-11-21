import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { item as itemMock } from "../mocks/item.mock";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(itemMock[0]), 2000)).then(
      (data) => {

        if(item){
          const items = data.find(
            (product)=> product.item ===item
          );
          setItem(items)
        }else {
          setItem(data);
        }
      } 
    );
  }, []);

  if (!item) {
    return <p>Loading...</p>;
  }

};

export default ItemDetailContainer;