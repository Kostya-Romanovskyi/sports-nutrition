import styled from "styled-components";
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

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const Item = styled.a`
  position: relative;
  margin-right: 10px;
  ${media.tablet} {
    margin-right: 9px;
  }
`;

const Link = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  cursor: pointer;
  filter: grayscale(100%) !important;
  &:hover {
    filter: grayscale(0%) !important;
  }
  ${media.tablet} {
    width: 60px;
    height: 60px;
  }
  ${media.mobile} {
    width: 50px;
    height: 50px;
  }
`;

export { StyledBrands, Title, Container, Item, Link };
