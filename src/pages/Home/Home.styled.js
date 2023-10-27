import styled from "styled-components";
import { media } from "../../ui/media";

export const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  /* background-color: grey; */
  ${media.tablet} {
    /* background-color: red; */
  }
  ${media.desktop} {
    /* background-color: green; */
  }
`;
