import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useCart } from '../hooks/useCart'
import { clearCart } from '../redux/slices/cartSlice'
import { addOrder } from '../redux/slices/orderSlice'
import CheckoutForm from '../components/checkout/CheckoutForm'
import PaymentMethod from '../components/checkout/PaymentMethod'
import OrderSummary from '../components/checkout/OrderSummary'
import toast from 'react-hot-toast'

const Checkout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { items, getTotal } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [loading, setLoading] = useState(false)

  const subtotal = getTotal()
  const shipping = subtotal > 100 ? 0 : 10
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  const handleSubmit = (data) => {
    setLoading(true)
    
    const order = {
      id: Date.now(),
      items,
      subtotal,
      shipping,
      tax,
      total,
      paymentMethod,
      shippingAddress: data,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }

    setTimeout(() => {
      dispatch(addOrder(order))
      dispatch(clearCart())
      toast.success('Order placed successfully!')
      setLoading(false)
      navigate('/orders')
    }, 1500)
  }

  if (items.length === 0) {
    navigate('/cart')
    return null
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CheckoutForm onSubmit={handleSubmit} loading={loading} />
          
          <div className="mt-6">
            <PaymentMethod selected={paymentMethod} onChange={setPaymentMethod} />
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <OrderSummary
            items={items}
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

export default Checkout