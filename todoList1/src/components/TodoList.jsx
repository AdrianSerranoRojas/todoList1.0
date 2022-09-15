import React from "react";

const TodoList = ({ todoList, deleteTodo }) => {
  console.log(todoList);
  const handleDeleteTodo = (title) => {
    deleteTodo(title);
  };
  return (
    <>
      <div>TodoList</div>
      {todoList.map((todo) => (
        <div key={todo.title}>
          <div>{todo.title}</div>
          <button onClick={() => handleDeleteTodo(todo.title)}>X</button>
        </div>
      ))}
    </>
  );
};

export default TodoList;
