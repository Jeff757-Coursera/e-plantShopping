import { createSlice } from '@reduxjs/toolkit';

// Define the CartSlice with initial state and reducers
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
          existingItem.quantity++;
      } else {
          state.items.push({ name, image, cost, quantity: 1 });
      }
      console.log('Updated cart state:', state.items);
  },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export the action creators to be used in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be used in store.js
export default CartSlice.reducer;
