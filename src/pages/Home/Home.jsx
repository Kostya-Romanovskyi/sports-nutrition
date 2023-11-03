import { useState } from "react";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import Filters from "../../components/FilterRadio/FilterRadio";
import FilterRange from "../../components/FilterRange/FilterRange";
import FilterCheckbox from "../../components/FilterCheckbox/FilterCheckbox";
import Sorting from "../../components/Sorting/Sorting";
import ProductCard from "../../components/ProductCard/ProductCard";

import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

import { categories, categories2, categories3, categories4 } from "../../imitationAPI";

import {
  Container,
  FlexWrappBtns,
  FilterBtn,
  GreyBG,
  FiltersMobile,
  GridContainer,
  TextBtn,
  CloseBtn,
} from "./Home.styled";

const Home = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleBurgerOpen = () => {
    setIsFiltersOpen(true);
    document.body.style.overflowY = "hidden";
  };

  const handleBurgerClose = (e) => {
    setIsFiltersOpen(false);
    document.body.style.overflowY = "auto";
  };

  const closeForBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      setIsFiltersOpen(false);
      document.body.style.overflowY = "auto";
    }
  };

  return (
    <>
      <Container className="container">
        <FlexWrappBtns>
          <FilterBtn onClick={handleBurgerOpen}>
            <RxHamburgerMenu />
            <TextBtn>Каталог</TextBtn>
          </FilterBtn>

          <Sorting />
        </FlexWrappBtns>

        <GridContainer>
          <GreyBG onClick={closeForBackdrop} $toggle={isFiltersOpen}>
            <FiltersMobile $toggle={isFiltersOpen}>
              <CloseBtn onClick={handleBurgerClose}>
                <GrClose style={{ width: 20, height: 20 }} />
              </CloseBtn>

              <Filters categories={categories} />
              <Filters categories={categories2} />
              <FilterCheckbox categories={categories3} />
              <FilterCheckbox categories={categories4} />
              <FilterRange />
            </FiltersMobile>
          </GreyBG>

          <ProductsGrid />
        </GridContainer>
      </Container>
    </>
  );
};

export default Home;
