import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../../ui/media";
import Colors from "../../ui/colors";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ImageContainer = styled.div`
  padding: 20px 10px 30px 10px;

  ${media.tablet} {
    padding: 30px 18px 40px 18px;
  }

  ${media.desktop} {
    padding: 50px 25px 60px 25px;
  }
`;

export const ImageLink = styled(Link)`
  display: block;
  max-width: 100%;
`;

export const Image = styled(LazyLoadImage)`
  display: block;
  max-width: 100%;
  margin: 0 auto;
`;

export const ContentWrapp = styled.div`
  padding-left: 5px;
  padding-right: 5px;

  ${media.tablet} {
    padding-left: 15px;
    padding-right: 15px;
  }

  ${media.desktop} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Label = styled(Link)`
  display: block;

  font-family: "GrtskPeta-Medium", sans-serif;
  font-size: 12px;

  text-transform: uppercase;
  text-decoration: none;

  margin-bottom: 5px;

  color: ${Colors.mainTextColor};

  ${media.tablet} {
    font-size: 16px;

    line-height: 156.25%;
    letter-spacing: -0.32px;
  }
`;

export const Category = styled(Link)`
  display: block;

  font-family: "GrtskPeta-Medium", sans-serif;
  font-size: 12px;

  text-decoration: none;

  margin-bottom: 10px;

  color: ${Colors.greyCategoryColor};

  ${media.tablet} {
    font-size: 14px;

    line-height: 178.571%;
    letter-spacing: -0.28px;
  }
`;

export const Price = styled.p`
  font-family: "GrtskPeta-Medium", sans-serif;
  font-size: 12px;

  text-transform: uppercase;

  margin-bottom: 10px;

  color: ${Colors.mainTextColor};

  font-size: 18px;

  line-height: 166.667%;
  letter-spacing: -0.36px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BtnBasket = styled.button`
  font-family: "GrtskPeta-Medium", sans-serif;
  font-size: 12px;
  padding: 5px 10px;

  border: none;

  color: ${Colors.whiteColor};
  background-color: ${Colors.secondaryTextColor};

  cursor: pointer;

  transition: background-color 300ms;

  &:hover {
    background-color: ${Colors.blueHoverColor};
  }

  @media screen and (max-width: 480px) {
    font-size: 2.5vw;
  }

  ${media.tablet} {
    font-size: 14px;
    padding: 10px 20px;
  }
`;

export const BtnOneClick = styled.button`
  font-family: "GrtskPeta-Medium", sans-serif;
  font-size: 12px;
  padding: 5px 10px;

  border: none;

  color: ${Colors.mainTextColor};
  background-color: transparent;

  cursor: pointer;

  transition: color 300ms;

  &:hover {
    color: ${Colors.greyCategoryColor};
  }

  @media screen and (max-width: 480px) {
    font-size: 2.5vw;
  }

  ${media.tablet} {
    font-size: 14px;
    padding: 10px 20px;
  }
`;
