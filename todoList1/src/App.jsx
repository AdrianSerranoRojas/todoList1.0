import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import ThemedButtom from "./components/ThemedButtom";
import TodoList from "./components/TodoList";

import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [todoList, setTodoList] = useLocalStorage("todoList", []);

  const addTodo = (data) => {
    console.log("pre todoList", data);
    const newTodo = {
      title: data,
      active: true,
      isEditing: false,
    };
    const newTodoList = [...todoList, newTodo];
    console.log("post todoList", todoList);
    setTodoList(newTodoList);
  };
  const deleteTodo = (title) => {
    const newTodoList = todoList.filter((todos) => todos.title !== title);
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ThemedButtom />
      <CreateTodo addTodo={addTodo} />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
