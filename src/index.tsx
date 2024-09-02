import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./assets/screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartScreen from "./assets/screens/CartScreen";
import CheckoutScreen from "./assets/screens/CheckoutScreen";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="cart" element={<CartScreen />} />
      <Route path="checkout" element={<CheckoutScreen />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
