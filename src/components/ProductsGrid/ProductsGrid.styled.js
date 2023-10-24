import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../../ui/media";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 12px;

  text-align: center;

  ${media.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 18px;
  }

  ${media.desktop} {
    gap: 25px;
  }
`;

export const ListLink = styled(Link)`
  display: block;
  height: 290px;
  background-color: yellow;
`;
