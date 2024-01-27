
import { useParams } from "react-router-dom";
import HeaderMenu from "../../components/HeaderMenu/headerMenu";
import ProductDetail from "../../Components/ProductDetail/productDetail"
import Search from "../../components/BarraPesquisa/barraPesquisa";
import "./index.scss";

const Products = ({ data }) => {
  const { productId } = useParams();
  const selectedProduct = data.find((product) => product.id == productId);

  return (
    <section className="product">
      <HeaderMenu />
      <Search />
      <ProductDetail data={selectedProduct} />
    </section>
  )
  }