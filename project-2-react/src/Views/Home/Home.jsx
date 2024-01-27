
import "./index.scss";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import BarraPesquisa from "../../Components/BarraPesquisa/barraPesquisa";
import ProductsCard from "../../Components/ProductsCard/productsCard";

const Home = ({ data }) => {
 
  return (
    <div className="home">
      <HeaderMenu/>
      <BarraPesquisa/>

      <div className="home__products">
        {data.map((product) => (
            <ProductsCard key={product.id} data={product} />
          ))}
      </div> 
    </div>
  
);
  
}

export default Home