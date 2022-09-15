import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Input } from "../components/Input";

const CreateTodo = () => {
  const [todo, setTodo] = useState(() => {
    const saved = localStorage.getItem("todo");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    e.target.reset();
  };
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  return (
    <>
      <div>CreateTodo</div>
      <form onSubmit={handleSubmit}>
        <Input handleChange={handleChange} />
      </form>
      <h2>{todo}</h2>
    </>
  );
};

export default CreateTodo;
