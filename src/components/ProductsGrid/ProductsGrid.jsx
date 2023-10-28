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
  { number: 9 },
  { number: 10 },
  { number: 11 },
  { number: 12 },
  { number: 13 },
  { number: 14 },
  { number: 15 },
  { number: 16 },
  { number: 17 },
  { number: 18 },
  { number: 19 },
  { number: 20 },
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
