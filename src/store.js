// Import necessary functions and files
import { configureStore } from '@reduxjs/toolkit';  // Import configureStore from Redux Toolkit
import cartReducer from './CartSlice';  // Import the cart reducer from CartSlice

// Configure the store
const store = configureStore({
  reducer: {
    cart: cartReducer,  // Associate the cart reducer with the 'cart' slice of the state
  },
});

// Export the configured store
export default store;  // This allows other parts of the app to import the store
