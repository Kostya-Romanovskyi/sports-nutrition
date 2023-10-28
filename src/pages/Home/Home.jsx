import { Container, GridContainer } from "./Home.styled";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import Filters from "../../components/FilterRadio/FilterRadio";
import FilterRange from "../../components/FilterRange/FilterRange";
import FilterCheckbox from "../../components/FilterCheckbox/FilterCheckbox";
import {
  categories,
  categories2,
  categories3,
  categories4,
} from "../../imitationAPI";

const Home = () => {
  return (
    <>
      <Container className="container">
        <h1>Home page</h1>
        <GridContainer>
          <div>
            <Filters categories={categories} />
            <Filters categories={categories2} />
            <FilterCheckbox categories={categories3} />
            <FilterCheckbox categories={categories4} />
            <FilterRange />
          </div>

          <ProductsGrid />
        </GridContainer>
      </Container>
    </>
  );
};

export default Home;
