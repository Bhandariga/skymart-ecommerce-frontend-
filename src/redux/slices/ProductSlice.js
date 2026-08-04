import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllProducts, getCategories, getProductById } from '../../services/productService'

const initialState = {
  products: [],
  selectedProduct: null,
  categories: [],
  loading: false,
  error: null,
  filters: {
    category: '',
    priceRange: { min: 0, max: 1000 },
    rating: 0,
  },
  sortBy: 'popular',
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {
  try {
    return await getAllProducts()
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const fetchSingleProduct = createAsyncThunk('products/fetchSingleProduct', async (id, { rejectWithValue }) => {
  try {
    return await getProductById(id)
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const fetchCategories = createAsyncThunk('products/fetchCategories', async (_, { rejectWithValue }) => {
  try {
    return await getCategories()
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
      state.loading = false
    },
    setCategories: (state, action) => {
      state.categories = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    },
    resetFilters: (state) => {
      state.filters = { category: '', priceRange: { min: 0, max: 1000 }, rating: 0 }
      state.sortBy = 'popular'
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Unable to load products'
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.selectedProduct = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || 'Unable to load product'
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.payload || 'Unable to load categories'
      })
  },
})

export const { setProducts, setCategories, setLoading, setError, setFilters, setSortBy, resetFilters } = productSlice.actions
export default productSlice.reducer