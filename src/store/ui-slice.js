import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    goodsVisibility: false,
    cartVisibility: false,
    notification: null,
  },
  reducers: {
    showGoods(state, action) {
      state.goodsVisibility = action.payload;
    },
    showCart(state, action) {
      state.cartVisibility = action.payload;
    },
    showNotification(state, action) {
      state.notification = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
