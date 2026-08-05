import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import cartReducer from './slices/cartSlice'
import wishlistReducer from './slices/wishlistSlice'
import orderReducer from './slices/orderSlice'
import productReducer from "./slices/productSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    products: productReducer,
    orders: orderReducer,
  },
})