import styled from "styled-components";
import Colors from "../../ui/colors.js";
import { media } from "../../ui/media.js";

export const Container = styled.div`
  font-family: "GrtskPeta-Medium", sans-serif;

  width: 90%;
  margin: 0 auto;
`;

export const Text = styled.p`
  font-size: 16px;

  line-height: 156.25%;
  letter-spacing: -0.32px;

  margin-bottom: 15px;

  color: ${Colors.mainTextColor};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 25px;

  ${media.mobile} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledInput = styled.input`
  font-family: "GrtskPeta-Medium", sans-serif;

  max-width: 100%;

  height: 35px;

  padding-left: 10px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  ${media.mobile} {
    max-width: 95px;
  }

  ${media.desktop} {
    max-width: 85px;
  }
`;

export const BtnContainer = styled.div``;

export const Button = styled.button`
  font-size: 14px;

  line-height: 178.571%;
  letter-spacing: -0.28px;

  padding: 5px 20px;

  border: none;

  color: ${Colors.whiteColor};
  background-color: ${Colors.secondaryTextColor};

  &:hover {
    background-color: ${Colors.blueHoverColor};
  }

  margin-top: 20px;

  cursor: pointer;

  ${media.mobile} {
    margin-top: 0;
  }
`;
