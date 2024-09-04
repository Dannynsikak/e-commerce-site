import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./assets/screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartScreen from "./assets/screens/CartScreen";
import CheckoutScreen from "./assets/screens/CheckoutScreen";
import { NotFound } from "./assets/components";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ProtectedRoute } from "./assets/components/ProtectedRoute";
// import Login from "./assets/components/Login";
import RegisterUser from "./assets/components/RegisterUser";
import Login from "./assets/components/Login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<CartScreen />} />
          <Route path="checkout" element={<CheckoutScreen />} />
        </Route>

        {/* Catch-All for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
