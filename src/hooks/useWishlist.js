// src/hooks/useWishlist.js
import { useSelector, useDispatch } from 'react-redux'
import { addToWishlist, removeFromWishlist, clearWishlist } from '../redux/slices/wishlistSlice'
import { saveToStorage } from '../utils/localStorage'
import { STORAGE_KEYS } from '../utils/constants'

export const useWishlist = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.wishlist.items)

  const addItem = (product) => {
    dispatch(addToWishlist(product))
    saveToStorage(STORAGE_KEYS.WISHLIST, items)
  }

  const removeItem = (productId) => {
    dispatch(removeFromWishlist(productId))
    saveToStorage(STORAGE_KEYS.WISHLIST, items)
  }

  const clear = () => {
    dispatch(clearWishlist())
    saveToStorage(STORAGE_KEYS.WISHLIST, [])
  }

  const isInWishlist = (productId) => {
    return items.some(item => item.id === productId)
  }

  const getItemCount = () => {
    return items.length
  }

  return {
    items,
    addItem,
    removeItem,
    clear,
    isInWishlist,
    getItemCount,
  }
}