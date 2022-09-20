import React, { useState } from "react";
import {ThemeProvider} from "styled-components";
import ThemeContext from "./ThemeContext";
import themes from "../themes/themes";

export const ThemeToggleProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    console.log(currentTheme);
    switch (currentTheme.background) {
      case "#eeeeee":
        setCurrentTheme(themes.dark);
        break;
      case "#222222":
        setCurrentTheme(themes.yellow);
        break;
      default:
        setCurrentTheme(themes.light);
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
