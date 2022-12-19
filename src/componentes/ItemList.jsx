
import { Link } from "react-router-dom"
const ItemList = ({products}) => {

    return(
        <div>
        {<h2 className="texth2"></h2>}
  
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

export default ItemList