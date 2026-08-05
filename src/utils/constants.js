export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER: 'user',
  CART: 'cart',
  WISHLIST: 'wishlist',
  THEME: 'theme',
}

export const ROUTES = {
  HOME: '/',
  SHOP: '/shop',
  PRODUCT: '/product',
  CART: '/cart',
  WISHLIST: '/wishlist',
  CHECKOUT: '/checkout',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  ORDERS: '/orders',
  ADMIN: '/admin',
}

export const SORT_OPTIONS = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
]

export const PAGE_LIMITS = {
  PRODUCTS: 12,
  ORDERS: 10,
  REVIEWS: 5,
}