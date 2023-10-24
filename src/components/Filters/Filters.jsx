import { useState } from "react";
import {
  Dropdown,
  Button,
  DropdownContent,
  RadioLabel,
  RadioInput,
} from "./Filters.styled";

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "Сноуборды",
    "Крепления",
    "Обувь",
    "Наборы",
    "Куртки",
    "Штаны",
    "Шлемы",
    "Очки",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log(selectedCategory);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>Фильтры</button>

      <DropdownContent $isopen={isOpen}>
        <p>Категории товаров</p>
        {categories.map((category) => (
          <label key={category}>
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={handleCategoryChange}
            />
            {category}
          </label>
        ))}
      </DropdownContent>
    </div>
  );
};

export default Filters;
