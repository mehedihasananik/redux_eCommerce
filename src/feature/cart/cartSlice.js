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
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id)

      if (itemIndex >= 0) {
        state.cart[itemIndex].qnty += 1
      }
      else {

        state.cart = [...state.cart, { ...action.payload, qnty: 1 }]
      }


    }
  }
})

export const { addTocart } = cartSlice.actions;

export default cartSlice.reducer;