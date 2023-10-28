import { useState } from "react";
import {
  Container,
  DropdownContent,
  RadioLabel,
  CategoryTitle,
  RadioInput,
  TextContainer,
  TextCategory,
  TextTotal,
  ButtonContainer,
  Button,
} from "./FilterRadio.styled";

const FilterRadio = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  console.log(selectedCategory);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <DropdownContent $isopen={isOpen}>
        <CategoryTitle>{categories.category}</CategoryTitle>

        <ul>
          {categories.products.map((category) => (
            <li key={category.id}>
              <RadioLabel id={categories.id} $check={selectedCategory}>
                <RadioInput
                  type="radio"
                  name={categories.category}
                  value={category.product}
                  checked={selectedCategory === category.product}
                  onChange={handleCategoryChange}
                />
                <TextContainer>
                  <TextCategory>{category.product}</TextCategory>
                  <TextTotal>{category.total}</TextTotal>
                </TextContainer>
              </RadioLabel>
            </li>
          ))}
        </ul>
      </DropdownContent>
      <ButtonContainer>
        <Button onClick={handleToggle}>{isOpen ? " Скрыть" : "Показать все"}</Button>
      </ButtonContainer>
    </Container>
  );
};

export default FilterRadio;
