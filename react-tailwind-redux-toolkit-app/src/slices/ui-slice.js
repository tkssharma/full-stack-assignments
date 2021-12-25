import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartDrawerVisible: false
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle: (state) => {
      state.cartDrawerVisible = !state.cartDrawerVisible;
    }
  }
})

export const { toggle } = uiSlice.actions;
const uiReducer = uiSlice.reducer;
export default uiReducer;