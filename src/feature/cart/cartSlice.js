import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: [],
  amount: 0,
  total: 0,
  loading: false
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id)
      console.log(itemIndex)

      if (itemIndex >= 0) {
        state.cart[itemIndex].qnty += 1
      }
      else {
        let tem = { ...action.payload, qnty: 1 }
        state.cart = [...state.cart, tem]
      }
    },
    removeFromCart: (state, action) => {
      const removeItem = state.cart.filter(item => item.id !== action.payload)
      state.cart = removeItem
    },
    incrementItem: (state, action) => {
      const indexCart = state.cart.findIndex(item => item.id === action.payload)
      if (state.cart[indexCart].qnty >= 1) {
        state.cart[indexCart].qnty += 1
      }
    },
    decrementItem: (state, action) => {
      const indexCart = state.cart.findIndex(item => item.id === action.payload)
      if (state.cart[indexCart].qnty >= 1) {
        state.cart[indexCart].qnty -= 1
      }
    },
    clearCart: (state, action) => {
      state.cart = []
    },
  }
})

export const { addTocart, removeFromCart, clearCart, decrementItem, incrementItem } = cartSlice.actions;

export default cartSlice.reducer;