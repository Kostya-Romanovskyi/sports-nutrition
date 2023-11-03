import ProductCard from "../ProductCard/ProductCard";
import { List } from "./ProductsGrid.styled";
import { cardsArr } from "../../imitationAPI";

const ProductsGrid = () => {
  return (
    <List>
      {cardsArr.map((card) => {
        return (
          <li key={card.id}>
            <ProductCard id={card.id} img={card.img} label={card.label} category={card.category} price={card.price} />
          </li>
        );
      })}
    </List>
  );
};

export default ProductsGrid;
