import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeToggleProvider } from "./context/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeToggleProvider>
      <App />
    </ThemeToggleProvider>
  </React.StrictMode>
);
