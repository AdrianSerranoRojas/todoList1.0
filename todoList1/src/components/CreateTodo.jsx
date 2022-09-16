import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const CreateTodo = ({ addTodo }) => {
  const [todo, setTodo] = useLocalStorage("todo", "");
  const { theme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme.background,
    color: theme.foreground,
    border: "1px solid",
    borderRadius: 10,
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          style={style}
          type="text"
          id="name"
          name="name"
          placeholder="Create to do"
          value={todo}
          required
          minLength="4"
          maxLength="8"
          size="10"
          onChange={handleChange}
        />
      </form>
      <h2>{todo}</h2>
    </>
  );
};

export default CreateTodo;
