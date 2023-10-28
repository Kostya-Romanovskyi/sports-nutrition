import styled from "styled-components";
import Colors from "../../ui/colors.js";

export const Container = styled.div`
  font-family: "GrtskPeta-Medium", sans-serif;

  padding-right: 16px;
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
  align-items: center;
  justify-content: space-between;

  margin-bottom: 25px;
`;

export const StyledInput = styled.input`
  font-family: "GrtskPeta-Medium", sans-serif;

  max-width: 95px;
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
`;

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

  cursor: pointer;
`;
