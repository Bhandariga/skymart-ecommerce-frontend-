import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { USD_TO_NPR } from '../utils/currency'
import CartItem from '../components/cart/CartItem'
import CartSummary from '../components/cart/CartSummary'
import EmptyState from '../components/common/EmptyState'

const Cart = () => {
  const { items, getTotal } = useCart()
  const subtotal = getTotal()
  const shipping = subtotal > (100 * USD_TO_NPR) ? 0 : (10 * USD_TO_NPR)
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  if (items.length === 0) {
    return (
      <div className="container-custom py-16">
        <EmptyState
          icon="🛒"
          title="Your Cart is Empty"
          description="Looks like you haven't added any items to your cart yet."
          action={
            <Link to="/shop" className="btn-primary">
              Start Shopping
            </Link>
          }
        />
      </div>
    )
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="lg:col-span-1">
          <CartSummary
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
          />
        </div>
      </div>
    </div>
  )
}

export default Cart