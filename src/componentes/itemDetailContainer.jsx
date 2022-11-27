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

  

/*   if (!item) {
    return <p>Loading...</p>;
  } */


  return(

    <div className="imgLeft">
        <img  src={desc?.img} />
          <div>
            <h3 className="editText"> {desc?.name} </h3>
            <h4> {desc?. description} </h4>
            <h2> {desc?.price} </h2>

              <div className="flex_button">
                <button>+</button>
                <button>-</button>
              </div>
          </div>
    </div>
    
        

  )

};

export default ItemDetailContainer;