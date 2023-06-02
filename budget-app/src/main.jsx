import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { BudgetsProvider } from "./context/BudgetsContexts.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BudgetsProvider>
    <App />
  </BudgetsProvider>
);
