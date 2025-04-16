import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import Modak from "./modak.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Modak />
  </StrictMode>,
);
