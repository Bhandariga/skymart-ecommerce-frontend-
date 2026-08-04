// src/pages/Orders.jsx
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatNpr } from '../utils/currency'
import EmptyState from '../components/common/EmptyState'

const Orders = () => {
  const orders = useSelector((state) => state.orders.orders)

  if (orders.length === 0) {
    return (
      <div className="container-custom py-16">
        <EmptyState
          icon="📦"
          title="No Orders Yet"
          description="You haven't placed any orders yet."
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
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-500">Order #{order.id}</p>
                <p className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">{formatNpr(order.total)}</p>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <p className="font-semibold mb-2">Items</p>
              <div className="space-y-2">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} × {item.quantity}</span>
                    <span>{formatNpr(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders