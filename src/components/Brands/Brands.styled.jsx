import styled from "styled-components";
import Slider from "react-slick";
import { media } from "../../ui/media";

const StyledBrands = styled.section`
  margin: 0 auto;
  padding: 0 15px;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 30px;
  margin-bottom: 10px;
  ${media.tablet} {
    font-size: 24px;
  }
`;

const SliderContainer = styled(Slider)`
  width: 100%;
  margin: 0 auto;
`;

const Item = styled.a`
  position: relative;
  margin-right: 10px;
`;

const Link = styled.img`
  width: 120px;
  height: 100px;
  object-fit: contain;
  cursor: pointer;
  filter: grayscale(100%) !important;
  &:hover {
    filter: grayscale(0%) !important;
  }
  ${media.tablet} {
    width: 110px;
    height: 70px;
  }
  ${media.mobile} {
    width: 90px;
    height: 70px;
  }
`;

export { StyledBrands, Title, SliderContainer, Item, Link };
