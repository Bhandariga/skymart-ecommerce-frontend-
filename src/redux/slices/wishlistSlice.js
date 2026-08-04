// src/redux/slices/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { loadFromStorage, saveToStorage } from '../../utils/localStorage'
import { STORAGE_KEYS } from '../../utils/constants'
import toast from 'react-hot-toast'

const persisted = loadFromStorage(STORAGE_KEYS.WISHLIST)

const initialState = persisted || { items: [] }

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlistReducer: (state, action) => {
      const exists = state.items.some(item => item.id === action.payload.id)
      if (!exists) {
        state.items.push(action.payload)
      }
    },
    removeFromWishlistReducer: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    clearWishlistReducer: (state) => {
      state.items = []
    },
  },
})

export const { addToWishlistReducer, removeFromWishlistReducer, clearWishlistReducer } = wishlistSlice.actions

export const addToWishlist = (product) => (dispatch, getState) => {
  dispatch(addToWishlistReducer(product))
  const state = getState().wishlist
  saveToStorage(STORAGE_KEYS.WISHLIST, state)
  toast.success('Added to wishlist ❤️')
}

export const removeFromWishlist = (productId) => (dispatch, getState) => {
  dispatch(removeFromWishlistReducer(productId))
  const state = getState().wishlist
  saveToStorage(STORAGE_KEYS.WISHLIST, state)
  toast.success('Removed from wishlist')
}

export const clearWishlist = () => (dispatch, getState) => {
  dispatch(clearWishlistReducer())
  const state = getState().wishlist
  saveToStorage(STORAGE_KEYS.WISHLIST, state)
}

export default wishlistSlice.reducer