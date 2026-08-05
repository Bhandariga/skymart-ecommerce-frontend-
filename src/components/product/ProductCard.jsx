import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'
import { addToWishlist, removeFromWishlist } from '../../redux/slices/wishlistSlice'
import { useWishlist } from '../../hooks/useWishlist'
import { formatNpr } from '../../utils/currency'
import Rating from './Rating'
import ImageWithFallback from '../common/ImageWithFallback'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const { isInWishlist } = useWishlist()
  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }))
  }

  const handleToggleWishlist = () => {
    if (inWishlist) {
      dispatch(removeFromWishlist(product.id))
    } else {
      dispatch(addToWishlist({ ...product, quantity: 1 }))
    }
  }

  const rating = product.rating?.rate ?? product.rating ?? 0
  const reviews = product.rating?.count ?? product.reviews ?? 0
  const title = product.title || product.name || 'Product'
  const description = product.description || product.subtitle || ''
  const image = product.image || product.thumbnail || ''
  const category = product.category || 'General'
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="card group overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-[#111827]">
          <div className="h-48 w-full overflow-hidden">
            <ImageWithFallback
              src={image}
              alt={title}
              containerClass="h-48 w-full"
              imgClass="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          {discount > 0 && (
            <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold text-white">
              -{discount}%
            </span>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white transition hover:text-lime-600">
            {title}
          </h3>
        </Link>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">{category}</p>
        <p className="mb-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">{description}</p>
        <Rating rating={rating} reviews={reviews} />

        <div className="mt-4 flex items-center justify-between gap-2">
          <div>
            <span className="text-xl font-semibold text-lime-600">
              {formatNpr(product.price)}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">
                {formatNpr(product.originalPrice)}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleWishlist}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-xl transition hover:scale-110 hover:bg-gray-50 dark:border-gray-700 dark:bg-[#111827]"
            >
              {inWishlist ? '❤️' : '♡'}
            </button>
            <button onClick={handleAddToCart} className="btn-primary rounded-full px-3 py-2 text-sm">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard