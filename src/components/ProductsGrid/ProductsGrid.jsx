import { List, ListLink } from "./ProductsGrid.styled";

const arr = [
  { number: 1 },
  { number: 2 },
  { number: 3 },
  { number: 4 },
  { number: 5 },
  { number: 6 },
  { number: 7 },
  { number: 8 },
];

const ProductsGrid = () => {
  return (
    <List>
      {arr.map((item) => {
        return (
          <ListLink key={item.number} to="/">
            <li>
              <p>{item.number}</p>
            </li>
          </ListLink>
        );
      })}
    </List>
  );
};

export default ProductsGrid;
