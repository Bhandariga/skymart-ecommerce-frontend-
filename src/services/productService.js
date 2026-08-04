const API_URL = 'https://fakestoreapi.com/products'

const request = async (url) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Unable to load products')
  }
  return response.json()
}

export const getAllProducts = async () => {
  return request(API_URL)
}

export const getProductById = async (id) => {
  return request(`${API_URL}/${id}`)
}

export const getProductsByCategory = async (category) => {
  return request(`${API_URL}/category/${encodeURIComponent(category)}`)
}

export const getCategories = async () => {
  return request(`${API_URL}/categories`)
}
