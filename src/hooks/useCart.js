// src/hooks/useCart.js
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../redux/slices/cartSlice'
import { saveToStorage } from '../utils/localStorage'
import { STORAGE_KEYS } from '../utils/constants'
import { usdToNpr } from '../utils/currency'

export const useCart = () => {
  const dispatch = useDispatch()
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart)

  const addItem = (product) => {
    dispatch(addToCart(product))
    saveToStorage(STORAGE_KEYS.CART, { items, totalQuantity, totalAmount })
  }

  const removeItem = (productId) => {
    dispatch(removeFromCart(productId))
    saveToStorage(STORAGE_KEYS.CART, { items, totalQuantity, totalAmount })
  }

  const increase = (productId) => {
    dispatch(increaseQuantity(productId))
    saveToStorage(STORAGE_KEYS.CART, { items, totalQuantity, totalAmount })
  }

  const decrease = (productId) => {
    dispatch(decreaseQuantity(productId))
    saveToStorage(STORAGE_KEYS.CART, { items, totalQuantity, totalAmount })
  }

  const clear = () => {
    dispatch(clearCart())
    saveToStorage(STORAGE_KEYS.CART, { items: [], totalQuantity: 0, totalAmount: 0 })
  }

  const getItemCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotal = () => {
    return items.reduce((total, item) => total + (usdToNpr(item.price || 0) * (item.quantity || 0)), 0)
  }

  return {
    items,
    totalQuantity,
    totalAmount,
    addItem,
    removeItem,
    increase,
    decrease,
    clear,
    getItemCount,
    getTotal,
  }
}