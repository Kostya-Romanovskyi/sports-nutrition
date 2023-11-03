import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../../ui/media";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 10px;

  ${media.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }

  ${media.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;
  }
`;

export const ListLink = styled(Link)`
  display: block;
`;
