import { useEffect } from "react";

export const useSetLocalStorage = (key, data) => {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);
};