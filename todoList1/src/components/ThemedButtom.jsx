import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import themes from "../themes/themes";

const ThemedButtom = (props) => {
  const { theme, updateTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme.background,
    color: theme.foreground,
    border: "1px solid",
    borderRadius: 10,
  };

  const updateLightTheme = () => {
    console.log(theme);
    if (theme.background === "#eeeeee") {
      updateTheme(themes.dark);
    } else {
      updateTheme(themes.light);
    }
  };

  return <button onClick={updateLightTheme} {...props} style={style} />;
};
export default ThemedButtom;
