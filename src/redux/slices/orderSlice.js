// src/redux/slices/orderSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  orders: [],
  currentOrder: null,
  loading: false,
  error: null,
}

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload
      state.loading = false
    },
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload
    },
    addOrder: (state, action) => {
      state.orders.push(action.payload)
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    clearError: (state) => {
      state.error = null
    },
  },
})

export const { setOrders, setCurrentOrder, addOrder, setLoading, setError, clearError } = orderSlice.actions
export default orderSlice.reducer 