import { FlexContainer, StyledSelect, StyledText } from "./Sorting.styled";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Sorting = () => {
  return (
    <FlexContainer>
      <StyledText>Сортировать по:</StyledText>
      <StyledSelect placeholder="Новинки" options={options} />
    </FlexContainer>
  );
};

export default Sorting;
