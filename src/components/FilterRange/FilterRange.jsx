import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import { Container, FlexContainer, StyledInput, Text, BtnContainer, Button } from "./FilterRange.styled";

const valuetext = (value) => {
  return `${value}`;
};

const RangeSlider = () => {
  const [value, setValue] = useState([4000, 15000]);
  const [firstInput, setFirstInput] = useState(value[0]);
  const [secondInput, setSecondInput] = useState(value[1]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setFirstInput(newValue[0]);
    setSecondInput(newValue[1]);
  };

  const handleFirstInputChange = (e) => {
    const newFirstInput = +e.target.value;

    setValue([newFirstInput, value[1]]);

    handleChange(event, [newFirstInput, value[1]]);
  };

  const handleSecondInputChange = (e) => {
    const newSecondInput = +e.target.value;

    setValue([value[0], newSecondInput]);

    handleChange(event, [value[0], newSecondInput]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "e") {
      e.preventDefault();
    }
  };

  if (firstInput === 0) {
    setFirstInput("");
  }

  if (secondInput === 0) {
    setSecondInput("");
  }

  return (
    <Container>
      <Text>Цена</Text>

      <FlexContainer>
        <StyledInput
          type="number"
          value={firstInput}
          onChange={handleFirstInputChange}
          onKeyDown={handleKeyDown}
          placeholder="0"
        />

        <span>-</span>

        <StyledInput
          type="number"
          value={secondInput}
          onChange={handleSecondInputChange}
          onKeyDown={handleKeyDown}
          placeholder="0"
        />

        <BtnContainer>
          <Button type="button">OK</Button>
        </BtnContainer>
      </FlexContainer>

      <Box sx={{ maxWidth: "250%" }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          max={20000}
        />
      </Box>
    </Container>
  );
};

export default RangeSlider;
