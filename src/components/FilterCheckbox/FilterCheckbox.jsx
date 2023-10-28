import { useState } from "react";
import {
  Container,
  DropdownContent,
  CheckboxLabel,
  CheckboxStyled,
  CategoryTitle,
  TextContainer,
  TextCategory,
  TextTotal,
  ButtonContainer,
  Button,
} from "./FilterCheckbox.styled";

const FilterCheckbox = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputCheck, setInputCheck] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckbox = (e) => {
    setInputCheck(e.target.checked);
    setInputValue(e.target.value);
  };

  console.log(inputCheck);
  console.log(inputValue);

  return (
    <Container>
      <DropdownContent $isopen={isOpen}>
        <CategoryTitle>{categories.category}</CategoryTitle>

        <ul>
          {categories.products.map((category) => (
            <li key={category.id}>
              <CheckboxLabel id={categories.id}>
                <CheckboxStyled
                  type="checkbox"
                  name={categories.category}
                  value={category.product}
                  onChange={handleCheckbox}
                />

                <TextContainer>
                  <TextCategory>{category.product}</TextCategory>
                  <TextTotal>{category.total}</TextTotal>
                </TextContainer>
              </CheckboxLabel>
            </li>
          ))}
        </ul>
      </DropdownContent>
      <ButtonContainer>
        <Button onClick={handleToggle}>{isOpen ? "Скрыть" : "Показать все"}</Button>
      </ButtonContainer>
    </Container>
  );
};

export default FilterCheckbox;
