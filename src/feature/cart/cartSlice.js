import { createSlice } from "@reduxjs/toolkit";
import CardData from "../../CardData";

const initialState = {
  cart: CardData,
  amount: 0,
  total: 0,
  loading: 0
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
})

export default cartSlice.reducer;