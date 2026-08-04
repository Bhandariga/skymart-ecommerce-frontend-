// src/hooks/useAuth.js
import { useSelector, useDispatch } from 'react-redux'
import { logout, setUser, setToken } from '../redux/slices/authSlice'
import { loadFromStorage, saveToStorage, removeFromStorage } from '../utils/localStorage'
import { STORAGE_KEYS } from '../utils/constants'

export const useAuth = () => {
  const dispatch = useDispatch()
  const { user, token, isAuthenticated, loading, error } = useSelector((state) => state.auth)

  const login = (userData, tokenData) => {
    dispatch(setUser(userData))
    dispatch(setToken(tokenData))
    saveToStorage(STORAGE_KEYS.USER, userData)
    saveToStorage(STORAGE_KEYS.AUTH_TOKEN, tokenData)
  }

  const logoutUser = () => {
    dispatch(logout())
    removeFromStorage(STORAGE_KEYS.USER)
    removeFromStorage(STORAGE_KEYS.AUTH_TOKEN)
  }

  const checkAuth = () => {
    const savedUser = loadFromStorage(STORAGE_KEYS.USER)
    const savedToken = loadFromStorage(STORAGE_KEYS.AUTH_TOKEN)
    
    if (savedUser && savedToken) {
      dispatch(setUser(savedUser))
      dispatch(setToken(savedToken))
      return true
    }
    return false
  }

  return {
    user,
    token,
    isAuthenticated,
    loading,
    error,
    login,
    logout: logoutUser,
    checkAuth,
  }
}