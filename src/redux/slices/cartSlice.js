// src/redux/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { loadFromStorage, saveToStorage } from '../../utils/localStorage'
import { STORAGE_KEYS } from '../../utils/constants'
import toast from 'react-hot-toast'
import { usdToNpr } from '../../utils/currency'

const persisted = loadFromStorage(STORAGE_KEYS.CART)

const computeTotalsFromItems = (items = []) => {
  const totalQuantity = items.reduce((s, i) => s + (i.quantity || 0), 0)
  const totalAmount = items.reduce((s, i) => s + usdToNpr(i.price || 0) * (i.quantity || 0), 0)
  return { totalQuantity, totalAmount }
}

const initialState = (() => {
  if (!persisted) return { items: [], totalQuantity: 0, totalAmount: 0 }
  const { totalQuantity, totalAmount } = computeTotalsFromItems(persisted.items || [])
  return { items: persisted.items || [], totalQuantity, totalAmount }
})()

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartReducer: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 })
      }
      const qty = action.payload.quantity || 1
      state.totalQuantity += qty
      state.totalAmount += usdToNpr(action.payload.price || 0) * qty
    },
    removeFromCartReducer: (state, action) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        state.totalQuantity -= item.quantity
        state.totalAmount -= usdToNpr(item.price || 0) * item.quantity
        state.items = state.items.filter(item => item.id !== action.payload)
      }
    },
    increaseQuantityReducer: (state, action) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        item.quantity += 1
        state.totalQuantity += 1
        state.totalAmount += usdToNpr(item.price || 0)
      }
    },
    decreaseQuantityReducer: (state, action) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
        state.totalQuantity -= 1
        state.totalAmount -= usdToNpr(item.price || 0)
      } else if (item && item.quantity === 1) {
        state.totalQuantity -= 1
        state.totalAmount -= usdToNpr(item.price || 0)
        state.items = state.items.filter(item => item.id !== action.payload)
      }
    },
    clearCartReducer: (state) => {
      state.items = []
      state.totalQuantity = 0
      state.totalAmount = 0
    },
  },
})

export const { addToCartReducer, removeFromCartReducer, increaseQuantityReducer, decreaseQuantityReducer, clearCartReducer } = cartSlice.actions

export const addToCart = (product) => (dispatch, getState) => {
  dispatch(addToCartReducer(product))
  const state = getState().cart
  saveToStorage(STORAGE_KEYS.CART, state)
  toast.success('Product added to cart 🛒')
}

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch(removeFromCartReducer(productId))
  const state = getState().cart
  saveToStorage(STORAGE_KEYS.CART, state)
  toast.success('Product removed from cart')
}

export const increaseQuantity = (productId) => (dispatch, getState) => {
  dispatch(increaseQuantityReducer(productId))
  const state = getState().cart
  saveToStorage(STORAGE_KEYS.CART, state)
}

export const decreaseQuantity = (productId) => (dispatch, getState) => {
  dispatch(decreaseQuantityReducer(productId))
  const state = getState().cart
  saveToStorage(STORAGE_KEYS.CART, state)
}

export const clearCart = () => (dispatch, getState) => {
  dispatch(clearCartReducer())
  const state = getState().cart
  saveToStorage(STORAGE_KEYS.CART, state)
}

export default cartSlice.reducer