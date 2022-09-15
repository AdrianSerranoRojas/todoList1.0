import { createContext } from "react";
import loadLocalStorageItems from "../utils/loadLocalStorageItems";

const TODO_LIST_LOCAL_STORAGE_KEY = "todoList1.0-todo-list";

export const TodoListStateContext = createContext(
  loadLocalStorageItems(TODO_LIST_LOCAL_STORAGE_KEY, [])
);

export const TodoListDispatchContext = createContext(() => {});
