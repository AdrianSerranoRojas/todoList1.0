import React, {useState} from "react";
import { ThemeContext } from "../context/ThemeContext";
import { themes } from "../themes/themes";

export const ThemeProvider = () => {
const [theme, setTheme] = useState()
  return (
    <ThemeContext.Provider value={themes.light}>
      {children}
    </ThemeContext.Provider>
  );
};
