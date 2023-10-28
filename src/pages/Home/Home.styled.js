import styled from "styled-components";
import { media } from "../../ui/media";

export const Container = styled.div`
  // background-color: grey;
  // ${media.tablet} {
  //   background-color: red;
  // }
  // ${media.desktop} {
  //   background-color: green;
  // }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;
