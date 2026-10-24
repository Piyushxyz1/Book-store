import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
   
    setCartItems: (state, action) => {
      state.items = action.payload;
    },

    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      const productId = action.payload.id;

      state.items = state.items.filter(
        (item) => item.id !== productId
      );
    },
  },
});

export const {
  setCartItems,
  addToCart,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;