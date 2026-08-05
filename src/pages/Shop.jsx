import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategories, fetchProducts, setFilters } from '../redux/slices/productSlice'
import ProductGrid from '../components/product/ProductGrid'
import ProductSkeleton from '../components/product/ProductSkeleton'
import ProductFilter from '../components/product/ProductFilter'
import ProductSort from '../components/product/ProductSort'

const Shop = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const { products: productList, filters, sortBy, loading, error, categories } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  }, [dispatch])

  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      dispatch(setFilters({ category: categoryParam }))
    }
  }, [searchParams, dispatch])

  const getFilteredProducts = useMemo(() => {
    let filtered = [...productList]

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter((product) => {
        return product.title.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
      })
    }

    if (filters.category) {
      filtered = filtered.filter((product) => product.category === filters.category)
    }

    if (filters.priceRange) {
      filtered = filtered.filter((product) => product.price >= filters.priceRange.min && product.price <= filters.priceRange.max)
    }

    if (filters.rating > 0) {
      filtered = filtered.filter((product) => product.rating?.rate >= filters.rating)
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating.rate - a.rating.rate)
        break
      default:
        break
    }

    return filtered
  }, [productList, filters, sortBy, searchTerm])

  const handleRetry = () => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  }

  return (
    <div className="container-custom py-8">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">Shop all products</p>
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">Discover the latest picks</h1>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search products or category"
            className="input-field min-w-[260px]"
          />
          <ProductSort />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div>
          <ProductFilter />
        </div>
        <div>
          {loading ? (
            <ProductSkeleton />
          ) : error ? (
            <div className="card flex flex-col items-center justify-center gap-4 p-10 text-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Unable to load products</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Please try again in a moment.</p>
              <button onClick={handleRetry} className="btn-primary">Retry</button>
            </div>
          ) : (
            <>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                Showing {getFilteredProducts.length} products
              </p>
              <ProductGrid products={getFilteredProducts} columns={3} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop