import { Outlet } from "react-router-dom";
import { Text } from "./Header.styled";

const Header = () => {
  return (
    <>
      <Text>Header</Text>

      <Outlet />
    </>
  );
};

export default Header;
