import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemedButtom = () => {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
};

export default ThemedButtom;
