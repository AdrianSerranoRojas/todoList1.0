import React, { useState } from "react";
import ThemeContext from "../context/ThemeContext";
import themes from "../themes/themes";

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, updateTheme: setCurrentTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
