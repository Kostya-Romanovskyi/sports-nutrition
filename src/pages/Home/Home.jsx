import { Container } from "./Home.styled";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import Filters from "../../components/Filters/Filters";
import Brands from "../../components/Brands/Brands";

const Home = () => {
  return (
    <>
      <Container className="container">
        <h1>Home page</h1>
        <Brands />
        <Filters />
        <ProductsGrid />
      </Container>
    </>
  );
};

export default Home;
