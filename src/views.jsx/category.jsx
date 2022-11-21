import { useParams } from "react-router-dom";
import ItemListContainer from "../componentes/ItemListContainer";
import { Layout } from "../componentes/Layout";

const CategoryView = () => {
  const { category } = useParams();
  // const categories = item.filter((product) => product.category === category);

  return (
    <Layout>
      <ItemListContainer />
    </Layout>
  );
};

export default CategoryView;