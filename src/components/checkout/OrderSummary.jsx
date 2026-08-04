// src/components/checkout/OrderSummary.jsx
import { formatNpr } from '../../utils/currency'

const OrderSummary = ({ items, subtotal, shipping, tax, total }) => {
  return (
    <div className="card p-6">
      <h3 className="text-xl font-bold mb-4">Order Summary</h3>
      
      <div className="space-y-3 max-h-60 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>{formatNpr(item.price * item.quantity)}</span>
          </div>
        ))}
      </div>
      
      <div className="border-t mt-4 pt-4 space-y-2">
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
    </div>
  )
}

export default OrderSummary