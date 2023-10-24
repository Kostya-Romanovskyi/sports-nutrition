import styled from "styled-components";

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;

  opacity: ${(props) => (props.$isopen === true ? 1 : 0)};
  pointer-events: ${(props) => (props.$isopen ? "visible" : "none")};

  transform: translate(
    0,
    ${(props) => (props.$isopen === true ? "100%" : "0")}
  );

  transition: transform 500ms, opacity 500ms;

  ${(props) => console.log(props.$isopen)}
`;

export const RadioLabel = styled.label`
  display: block;
  margin: 5px 0;
`;

export const RadioInput = styled.input`
  margin-right: 5px;
`;
