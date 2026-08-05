import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilters, resetFilters } from '../../redux/slices/productSlice'

const ProductFilter = () => {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.products.filters)
  const categories = useSelector((state) => state.products.categories)
  const [localFilters, setLocalFilters] = useState(filters)

  const categoryOptions = categories.map((category) => (typeof category === 'string' ? category : category.name))

  const handleApply = () => {
    dispatch(setFilters(localFilters))
  }

  const handleReset = () => {
    dispatch(resetFilters())
    setLocalFilters({ category: '', priceRange: { min: 0, max: 1000 }, rating: 0 })
  }

  return (
    <div className="card p-6">
      <h3 className="font-semibold text-lg mb-4">Filter Products</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
          <select
            value={localFilters.category}
            onChange={(e) => setLocalFilters({ ...localFilters, category: e.target.value })}
            className="input-field"
          >
            <option value="">All Categories</option>
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price Range</label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={localFilters.priceRange.min}
              onChange={(e) => setLocalFilters({
                ...localFilters,
                priceRange: { ...localFilters.priceRange, min: Number(e.target.value) }
              })}
              className="input-field"
              placeholder="Min"
            />
            <span>to</span>
            <input
              type="number"
              value={localFilters.priceRange.max}
              onChange={(e) => setLocalFilters({
                ...localFilters,
                priceRange: { ...localFilters.priceRange, max: Number(e.target.value) }
              })}
              className="input-field"
              placeholder="Max"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Rating</label>
          <div className="flex space-x-2">
            {[0, 1, 2, 3, 4].map((star) => (
              <button
                key={star}
                onClick={() => setLocalFilters({ ...localFilters, rating: star + 1 })}
                className={`text-2xl ${
                  localFilters.rating > star ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-2 pt-4">
          <button onClick={handleApply} className="btn-primary flex-1">
            Apply Filters
          </button>
          <button onClick={handleReset} className="btn-secondary">
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductFilter