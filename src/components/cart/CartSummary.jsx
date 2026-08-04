// src/components/cart/CartSummary.jsx
import { Link } from 'react-router-dom'
import { formatNpr } from '../../utils/currency'

const CartSummary = ({ subtotal, shipping, tax, total }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Order Summary</h3>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatNpr(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : formatNpr(shipping)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>{formatNpr(tax)}</span>
        </div>
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{formatNpr(total)}</span>
          </div>
        </div>
      </div>
      
      <Link to="/checkout" className="btn-primary w-full text-center mt-4">
        Proceed to Checkout
      </Link>
    </div>
  )
}

export default CartSummary
