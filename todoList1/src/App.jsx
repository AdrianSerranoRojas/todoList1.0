import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

import { useSetLocalStorage } from "./hooks/useSetLocalStorage";
import loadLocalStorageItems from "./utils/loadLocalStorageItems";

function App() {
  const [todoList, setTodoList] = useState(
    loadLocalStorageItems("todoList", [])
  );

  useSetLocalStorage("todoList", todoList);

  const handleTodoList = (data) => {
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
      <CreateTodo handleTodoList={handleTodoList} />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
