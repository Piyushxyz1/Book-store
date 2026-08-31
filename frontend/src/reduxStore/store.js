import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import loginModalReducer from "./loginModalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    loginModal: loginModalReducer,
  },
});