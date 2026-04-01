import React from "react";
import ReactDOM from "react-dom/client";
import cartReducer from "./cartSlice";
import authReducer from "../services/authSlice";
import { configureStore } from "@reduxjs/toolkit";

// import App from "./App";
// import { Provider } from "react-redux";

// const root = ReactDOM.createRoot(document.getElementById("root"));

export const store = configureStore({
  reducer: {
    cart : cartReducer,
    auth : authReducer,
  },
});


store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart" , JSON.stringify(state.cart.items));
});
