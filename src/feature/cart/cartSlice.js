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
      const indexFind = state.cart.findIndex(item => item.id === action.payload.id)
      if (indexFind >= 1) {
        state.cart[indexFind].qnty += 1
      }
      else {
        let temp = { ...action.payload, qnty: 1 }
        state.cart = [...state.cart, temp]
      }
    },

    incrementItem: (state, action) => {
    },
    decrementItem: (state, action) => {
    },
    removeFromCart: (state, action) => {
    }

  }
})

export const { addTocart, removeFromCart, clearCart, decrementItem, incrementItem } = cartSlice.actions;

export default cartSlice.reducer;