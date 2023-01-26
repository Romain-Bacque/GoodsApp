import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replace(state, action) {
      state.items = action.payload.items || [];
      state.totalAmount = action.payload.totalAmount ?? 0;
    },
    add(state, action) {
      const totalAmount = action.payload.amount * action.payload.price;
      const items = state.items;

      state.changed = true;

      const ExistingItemIndex = items.findIndex((item) => {
        return item.id === action.payload.id;
      });

      const existingItem = items[ExistingItemIndex];
      const updatedItems = [...items];

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.payload.amount,
        };

        updatedItems[ExistingItemIndex] = updatedItem;
        state.items = updatedItems;
        state.totalAmount += totalAmount;
        return;
      }
      state.items.push(action.payload);
      state.totalAmount += totalAmount;
    },
    remove(state, action) {
      const items = state.items;
      const ExistingItemIndex = items.findIndex(
        (item) => item.id === action.payload
      );

      state.changed = true;

      const existingItem = items[ExistingItemIndex];
      const totalAmount = state.totalAmount - existingItem.price;
      const updatedItems = [...items];

      if (existingItem.amount > 1) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };

        updatedItems[ExistingItemIndex] = updatedItem;

        state.items = updatedItems;
        state.totalAmount = totalAmount;
      } else {
        state.items = updatedItems.filter((item) => item !== existingItem);
        state.totalAmount = totalAmount;
      }
    },
    reset(state) {
      state.items = initialState.items;
      state.totalAmount = initialState.totalAmount;
      state.changed = initialState.changed;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
