// src/components/product/ProductSort.jsx
import { useDispatch, useSelector } from 'react-redux'
import { setSortBy } from '../../redux/slices/productSlice'
import { SORT_OPTIONS } from '../../utils/constants'

const ProductSort = () => {
  const dispatch = useDispatch()
  const currentSort = useSelector((state) => state.products.sortBy)

  return (
    <div className="flex items-center space-x-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort by:</label>
      <select
        value={currentSort}
        onChange={(e) => dispatch(setSortBy(e.target.value))}
        className="input-field py-1.5 px-3 text-sm"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ProductSort