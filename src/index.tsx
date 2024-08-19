import React from "react";
import ReactDOM from "react-dom/client";
// import "./styles/tailwind.css"; // Make sure this path is correct
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./assets/screens/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
