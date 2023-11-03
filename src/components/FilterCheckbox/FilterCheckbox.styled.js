import styled from "styled-components";
import CheckboxImg from "../../assets/images/Checkbox.svg";
import Colors from "../../ui/colors.js";
import { media } from "../../ui/media";

export const Container = styled.div`
  font-family: "GrtskPeta-Medium", sans-serif;

  width: 90%;

  margin: 50px auto 0 auto;
`;

export const CategoryTitle = styled.p`
  font-size: 16px;

  line-height: 156.25%;
  letter-spacing: -0.32px;

  margin-bottom: 23px;

  color: ${Colors.mainTextColor};
`;

export const DropdownContent = styled.div`
  max-height: ${(props) => (props.$isopen ? "2000px" : "190px")};

  overflow: hidden;

  margin-bottom: 10px;

  transition: max-height 500ms ease;

  ${media.tablet} {
    margin-bottom: 20px;
  }
`;

export const Item = styled.li`
  display: flex;
`;

export const CheckboxLabel = styled.label`
  position: relative;

  display: flex;
  align-items: center;

  margin-bottom: 10px;

  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const TextCategory = styled.span`
  font-size: 14px;

  line-height: 178.571%;
  letter-spacing: -0.28px;

  margin-left: 20px;

  color: ${Colors.mainTextColor};
`;

export const TextTotal = styled.span`
  font-size: 14px;

  line-height: 178.571%;
  letter-spacing: -0.28px;

  margin-right: 20px;

  color: ${Colors.totalTextColor};
`;

export const CheckboxStyled = styled.input`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -3px;
    left: 0;

    width: 16px;
    height: 16px;
    border: 2px solid ${Colors.secondaryTextColor};
    background-color: ${Colors.whiteColor};
  }

  &:checked {
    &:before {
      background-image: url(${CheckboxImg});

      background-repeat: no-repeat;
      background-size: 90% 90%;
      background-position: center;

      background-color: ${Colors.secondaryTextColor};
    }

    + ${TextContainer} ${TextCategory} {
      color: ${Colors.secondaryTextColor};
    }
    + ${TextContainer} ${TextTotal} {
      color: ${Colors.mainTextColor};
    }
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;

  margin-bottom: 37px;
`;

export const Button = styled.button`
  font-family: "GrtskPeta-Medium", sans-serif;

  padding: 10px 20px;
  margin: 0 auto;

  border: none;

  color: ${Colors.whiteColor};
  background-color: ${Colors.secondaryTextColor};

  cursor: pointer;

  &:hover {
    background-color: ${Colors.blueHoverColor};
  }
`;
