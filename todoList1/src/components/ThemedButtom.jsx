import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { ButtonStyled } from "./styledComponents/ButtonStyled";

const ThemedButtom = ({ children }) => {
  const { toggleTheme } = useContext(ThemeContext);

  return <ButtonStyled onClick={() => toggleTheme()}>{children}</ButtonStyled>;
};
export default ThemedButtom;
