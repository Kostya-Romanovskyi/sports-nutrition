import brandOne from "../../assets/icons/icon_1.webp";
import brandTwo from "../../assets/icons/icon_2.webp";
import brandTree from "../../assets/icons/icon_3.webp";
import brandFour from "../../assets/icons/icon_4.webp";
import brandFive from "../../assets/icons/icon_5.webp";
import brandSix from "../../assets/icons/icon_6.webp";
import brandSeven from "../../assets/icons/icon_7.webp";
import brandEight from "../../assets/icons/icon_8.webp";
import brandNine from "../../assets/icons/icon_9.webp";
import brandTen from "../../assets/icons/icon_10.webp";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  StyledBrands,
  Title,
  Container,
  Item,
  Link,
} from "./Brands.styled";

const Data = [
  { id: 1, imageURL: brandOne },
  { id: 2, imageURL: brandTwo },
  { id: 3, imageURL: brandTree },
  { id: 4, imageURL: brandFour },
  { id: 5, imageURL: brandFive },
  { id: 6, imageURL: brandSix },
  { id: 7, imageURL: brandSeven },
  { id: 8, imageURL: brandEight },
  { id: 9, imageURL: brandNine },
  { id: 10, imageURL: brandTen },
];

const Brands = () => {
  
  return (
    <StyledBrands>
      <Title>Производители</Title>
      <Container>
        {Data.map((el) => (
          <Item key={el.id} href="#">
            <Link src={el.imageURL}></Link>
          </Item>
        ))}
      </Container>
    </StyledBrands>
  );
};

export default Brands;
