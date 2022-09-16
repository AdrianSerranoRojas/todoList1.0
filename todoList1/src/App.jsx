import { useState } from "react";
import { useContext } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import ThemedButtom from "./components/ThemedButtom";
import TodoList from "./components/TodoList";

import { useLocalStorage } from "./hooks/useLocalStorage";
import ThemeContext from "./context/ThemeContext";

function App() {

    const { theme } = useContext(ThemeContext);
  const style = {
    backgroundColor: theme.background,
    color: theme.foreground,
    border: "1px solid",
    borderRadius: 10,
  };

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
    <div className="App" style={style}>
      <h1>Todo List</h1>
      <ThemedButtom>Toggle Theme</ThemedButtom>
      <CreateTodo addTodo={addTodo} />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
