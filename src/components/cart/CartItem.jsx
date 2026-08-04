// src/components/cart/CartItem.jsx
import { useDispatch } from 'react-redux'
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/slices/cartSlice'
import { formatNpr } from '../../utils/currency'
import QuantitySelector from './QuantitySelector'
import ImageWithFallback from '../common/ImageWithFallback'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="w-20 h-20">
        <ImageWithFallback src={item.image} alt={item.name} containerClass="w-20 h-20 rounded-lg overflow-hidden" imgClass="w-full h-full object-contain" />
      </div>
      
      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-primary-600 font-bold">{formatNpr(item.price)}</p>
      </div>
      
      <QuantitySelector 
        quantity={item.quantity}
        onIncrease={() => dispatch(increaseQuantity(item.id))}
        onDecrease={() => dispatch(decreaseQuantity(item.id))}
      />
      
      <div className="text-right">
        <p className="font-bold text-lg">{formatNpr(item.price * item.quantity)}</p>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-red-500 text-sm hover:text-red-600 transition"
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem    