import styled from "styled-components";
import { media } from "../../ui/media";
import Colors from "../../ui/colors";

export const Container = styled.div``;

export const FlexWrappBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 30px;

  ${media.desktop} {
    display: flex;
    justify-content: flex-end;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  ${media.desktop} {
    grid-template-columns: 1fr 3fr;
  }
`;

export const GreyBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  transform: translate(${(props) => (props.$toggle ? "0px" : "-100%")}, 0);
  transition: transform 500ms, opacity 500ms;

  width: 100%;
  height: 100%;

  background-color: rgba(189, 182, 181, 0.5);

  ${media.desktop} {
    position: static;
    width: 100%;
    height: auto;

    overflow-x: hidden;

    opacity: 1;

    transform: translate(0, 0);

    background-color: transparent;
  }
`;

export const FiltersMobile = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  width: 65%;
  height: 100vh;
  overflow-y: scroll;

  z-index: 22222;

  background-color: ${Colors.whiteColor};

  opacity: ${(props) => (props.$toggle ? 1 : 0)};

  transform: translate(${(props) => (props.$toggle ? "0px" : "-100%")}, 0);
  transition: transform 500ms, opacity 500ms;

  ${media.mobile} {
    width: 312px;
  }

  ${media.desktop} {
    position: static;
    width: 100%;
    height: auto;

    overflow-y: hidden;
    overflow-x: hidden;

    opacity: 1;

    transform: translate(0, 0);
  }
`;

export const FilterBtn = styled.button`
  display: flex;
  align-items: center;

  font-family: "GrtskPeta-Regular", sans-serif;

  padding: 10px 15px;

  border: none;

  color: ${Colors.whiteColor};
  background-color: ${Colors.secondaryTextColor};

  ${media.tablet} {
    font-size: 18px;
  }

  ${media.desktop} {
    display: none;
  }
`;

export const TextBtn = styled.span`
  margin-left: 5px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;

  border: none;

  background-color: transparent;

  ${media.desktop} {
    display: none;
  }
`;
