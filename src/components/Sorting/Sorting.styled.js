import styled from "styled-components";
import { media } from "../../ui/media";
import Colors from "../../ui/colors";
import Select from "react-select";

export const FlexContainer = styled.div`
  ${media.tablet} {
    display: flex;
    align-items: center;
  }
`;

export const StyledSelect = styled(Select)`
  font-family: " GrtskPeta-Regular", sans-serif;

  width: 150px;

  margin-bottom: 15px;

  cursor: pointer;

  ${media.tablet} {
    margin-bottom: 0px;
  }
`;

export const StyledText = styled.span`
  font-family: " GrtskPeta-Regular", sans-serif;

  margin-right: 10px;

  font-size: 12px;

  ${media.tablet} {
    font-size: 15px;
  }

  ${media.desktop} {
    font-size: 18px;
  }
`;
