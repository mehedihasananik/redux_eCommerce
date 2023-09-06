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

      const indexCart = state.cart.findIndex(item => item.id === action.payload.id)

      if (indexCart >= 0) {
        state.cart[indexCart].qnty += 1
      }
      else {
        let temp = { ...action.payload, qnty: 1 }
        state.cart = [...state.cart, temp]
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