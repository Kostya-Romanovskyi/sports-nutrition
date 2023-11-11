import {
  ImageContainer,
  ImageLink,
  Image,
  ContentWrapp,
  Label,
  Category,
  Price,
  FlexContainer,
  BtnBasket,
  BtnOneClick,
} from "./ProductCard.styled";

const ProductCard = ({ id, img, label, category, price }) => {
  console.log("img=", img);
  return (
    <>
      <ImageContainer>
        <ImageLink to="/">
          <Image src={img} alt="Snow" />
        </ImageLink>
      </ImageContainer>

      <ContentWrapp>
        <Label to="/">{label}</Label>
        <Category to="/">{category}</Category>
        <Price>{price}₴</Price>

        <FlexContainer>
          <BtnBasket type="button">В корзину</BtnBasket>
          <BtnOneClick type="button">Купить в 1 клик</BtnOneClick>
        </FlexContainer>
      </ContentWrapp>
    </>
  );
};
export default ProductCard;
