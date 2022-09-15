import React, { useReducer, useContext } from "react";

import {
  TodoListStateContext,
  TodoListDispatchContext,
} from "../context/TodoListContext";

import TodoListContext from "../context/TodoListContext";

import loadLocalStorageItems from "../../utils/loadLocalStorageItems";

const TODO_LIST_LOCAL_STORAGE_KEY = "todoList1.0-todo-list";

export const todoListInitialState = {
  todoList: loadLocalStorageItems(TODO_LIST_LOCAL_STORAGE_KEY, []),
};

function TodoListContextProvider({ children }) {
  const [cartItem, dispatch] = useReducer(
    cartItemReducer,
    cartItemInitialState
  );
  const { products } = useContext(ProductsContext);

  function handleChange(event, productId) {
    dispatch({
      type: "handleChange",
      payload: {
        productId: productId,
        products: products,
        event: event,
      },
    });
  }

  function handleAddToCart(productId) {
    dispatch({
      type: "handleAddToCart",
      payload: {
        productId: productId,
        products: products,
      },
    });
  }

  function handleRemove(productId) {
    dispatch({
      type: "handleRemove",
      payload: {
        productId: productId,
      },
    });
  }

  return (
    <CartItemStateContext.Provider value={cartItem}>
      <CartItemDispatchContext.Provider
        value={{ dispatch, handleChange, handleAddToCart, handleRemove }}
      >
        {children}
      </CartItemDispatchContext.Provider>
    </CartItemStateContext.Provider>
  );
}
export default CartItemContextProvider;
