import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainBoard from "./MainBoard/MainBoard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <MainBoard />
  </StrictMode>
);
