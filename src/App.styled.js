import styled from "styled-components";
import { media } from "./ui/media";

export const DivEL = styled.div`
  background-color: grey;
  ${media.tablet} {
    background-color: red;
  }
  ${media.desktop} {
    background-color: green;
  }
`;
