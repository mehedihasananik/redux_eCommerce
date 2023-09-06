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
    addTocart: () => {

    },
    removeFromCart: () => {

    },
    incrementItem: () => {

    },
    decrementItem: () => {

    },

    clearCart: () => {

    },
  }
})

export const { addTocart, removeFromCart, clearCart, decrementItem, incrementItem } = cartSlice.actions;

export default cartSlice.reducer;