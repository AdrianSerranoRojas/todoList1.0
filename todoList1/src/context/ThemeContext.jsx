import { useState } from "react";
import { createContext } from "react";
import themes from "../themes/themes";

const ThemeContext = createContext({
  themes: themes.light,
  updateTheme: () => {},
});
export default ThemeContext;
