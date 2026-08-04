// src/pages/Wishlist.jsx
import { Link } from 'react-router-dom'
import { useWishlist } from '../hooks/useWishlist'
import ProductGrid from '../components/product/ProductGrid'
import EmptyState from '../components/common/EmptyState'

const Wishlist = () => {
  const { items } = useWishlist()

  if (items.length === 0) {
    return (
      <div className="container-custom py-16">
        <EmptyState
          icon="♡"
          title="Your Wishlist is Empty"
          description="Start adding items you love to your wishlist."
          action={
            <Link to="/shop" className="btn-primary">
              Browse Products
            </Link>
          }
        />
      </div>
    )
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      <ProductGrid products={items} columns={4} />
    </div>
  )
}

export default Wishlist