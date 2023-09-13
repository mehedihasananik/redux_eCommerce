import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cart/cartSlice";
import foodSlice from "../feature/foodSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    food: foodSlice,
  }
})