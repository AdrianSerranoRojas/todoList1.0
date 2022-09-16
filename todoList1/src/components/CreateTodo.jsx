import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


const CreateTodo = ({ addTodo }) => {
  const [todo, setTodo] = useLocalStorage("todo", "");

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
      <div>CreateTodo</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter a new Todo"
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
