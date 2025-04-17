import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import Modak from "./modak.jsx";
import Excercise from "./JsxExcercise.jsx";
import Animal from "./Animals.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Animal />
  </StrictMode>,
);
