import { createSlice } from '@reduxjs/toolkit'
import { loadFromStorage } from '../../utils/localStorage'
import { STORAGE_KEYS } from '../../utils/constants'

const savedUser = loadFromStorage(STORAGE_KEYS.USER)
const savedToken = loadFromStorage(STORAGE_KEYS.AUTH_TOKEN)

const initialState = {
  user: savedUser || null,
  token: savedToken || null,
  isAuthenticated: !!(savedUser && savedToken),
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
      state.loading = false
      state.error = null
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    logout: (state) => {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      state.loading = false
      state.error = null
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

export const { setLoading, setUser, setToken, logout, setError, clearError } = authSlice.actions
export default authSlice.reducer