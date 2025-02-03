import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./core/Home";
import Paths from "./Paths";
import "./styles.css";

console.log(import.meta.env.VITE_API_URL);

ReactDOM.createRoot(document.getElementById("root")).render(<Paths />);
