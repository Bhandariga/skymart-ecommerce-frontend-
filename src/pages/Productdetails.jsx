import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice'
import { useWishlist } from '../hooks/useWishlist'
import { fetchSingleProduct } from '../redux/slices/productSlice'
import { formatNpr, calculateDiscount } from '../utils/currency'
import ProductGallery from '../components/product/ProductGallery'
import Rating from '../components/product/Rating'
import ReviewCard from '../components/product/ReviewCard'

const ProductDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { isInWishlist } = useWishlist()
  const { selectedProduct, loading, error } = useSelector((state) => state.products)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    dispatch(fetchSingleProduct(id))
  }, [dispatch, id])

  const product = selectedProduct

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }))
  }

  const handleToggleWishlist = () => {
    if (isInWishlist(product.id)) {
      dispatch(removeFromWishlist(product.id))
    } else {
      dispatch(addToWishlist({ ...product, quantity }))
    }
  }

  if (loading) {
    return (
      <div className="container-custom flex justify-center py-16">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary-200 border-t-primary-600"></div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold">Product Not Found</h2>
        <Link to="/shop" className="btn-primary">
          Continue Shopping
        </Link>
      </div>
    )
  }

  const discount = calculateDiscount(product.originalPrice, product.price)
  const rating = product.rating?.rate ?? product.rating ?? 0
  const reviews = product.rating?.count ?? product.reviews ?? 0
  const title = product.title || product.name || 'Product'
  const description = product.description || product.subtitle || ''
  const image = product.image || product.thumbnail || ''
  const category = product.category || 'General'

  return (
    <div className="container-custom py-8">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <ProductGallery images={product.images || [image]} name={title} />
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">{category}</p>
          <h1 className="mb-2 text-3xl font-bold">{title}</h1>
          <div className="mb-4 flex items-center space-x-4">
            <Rating rating={rating} reviews={reviews} />
          </div>

          <div className="mb-4 flex items-center space-x-4">
            <span className="text-3xl font-bold text-primary-600">{formatNpr(product.price)}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">{formatNpr(product.originalPrice)}</span>
            )}
            {discount > 0 && (
              <span className="rounded bg-red-500 px-2 py-1 text-sm font-semibold text-white">{discount}% OFF</span>
            )}
          </div>

          <p className="mb-6 text-gray-600 dark:text-gray-300">{description}</p>

          <div className="mb-6 border-y py-4">
            <div className="flex items-center space-x-4">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-8 w-8 items-center justify-center rounded border hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-8 w-8 items-center justify-center rounded border hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="mb-6 flex space-x-4">
            <button onClick={handleAddToCart} className="btn-primary flex-1">
              Add to Cart
            </button>
            <button onClick={handleToggleWishlist} className="btn-secondary px-6 text-2xl">
              {isInWishlist(product.id) ? '❤️' : '♡'}
            </button>
          </div>

          {product.specs && (
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111827] p-4">
              <h3 className="mb-2 font-semibold">Product Specifications</h3>
              <dl className="grid grid-cols-2 gap-2 text-sm">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-1">
                    <dt className="capitalize text-gray-600 dark:text-gray-300">{key}:</dt>
                    <dd className="font-medium">{Array.isArray(value) ? value.join(', ') : value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold">Customer Reviews</h3>
        <div className="space-y-4">
          <ReviewCard review={{ user: 'John D.', rating: 5, comment: 'Excellent product! Highly recommend.', date: '2024-01-15', helpful: 12 }} />
          <ReviewCard review={{ user: 'Sarah M.', rating: 4, comment: 'Great quality, fast shipping.', date: '2024-01-10', helpful: 8 }} />
          <ReviewCard review={{ user: 'Mike R.', rating: 5, comment: 'Perfect for my needs. Will buy again.', date: '2024-01-05', helpful: 5 }} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails