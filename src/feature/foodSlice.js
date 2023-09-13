import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fooditem: "anik",
  total: 0,
}

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {

  }
})



export default foodSlice.reducer