import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSetLocalStorage } from "../hooks/useSetLocalStorage";
import loadLocalStorageItems from "../utils/loadLocalStorageItems";

const CreateTodo = ({ handleTodoList }) => {
  // const [todo, setTodo] = useState(() => {
  //   const saved = localStorage.getItem("todo");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // });
  const [todo, setTodo] = useState(loadLocalStorageItems("todo", ""));

  useSetLocalStorage("todo", todo);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleTodoList(todo);
    setTodo("");
  };
  // useEffect(() => {
  //   localStorage.setItem("todo", JSON.stringify(todo));
  // }, [todo]);
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
