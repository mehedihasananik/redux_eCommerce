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
      const findItem = state.cart.findIndex(item => item.id === action.payload.id)
      if (findItem >= 0) {
        state.cart[findItem].qnty += 1
      }
      else {
        const temp = { ...action.payload, qnty: 1 }
        state.cart = [...state.cart, temp]
      }

    },
    clearCart: (state) => {
      const clear = []
      state.cart = clear
    },
    removeSingle: (state, action) => {

    }
    ,
    removeFromCart: (state, action) => {
      const remove = state.cart.filter(item => item.id !== action.payload)
      state.cart = remove
    }

  }
})

export const { addTocart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;