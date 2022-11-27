
import ItemDetailContainer from '../componentes/itemDetailContainer'
import {Layout} from '../componentes/Layout'
import { useParams } from "react-router-dom";
const ItemView = () => {
  return (
    <Layout>
      <ItemDetailContainer />
    </Layout>
  );
};

export default ItemView;