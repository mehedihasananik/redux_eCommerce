import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: [],
  amount: 0,
  total: 0,
  loading: 0
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      state.cart = [...state.cart, action.payload]
    }
  }
})

export const { addTocart } = cartSlice.actions;

export default cartSlice.reducer;