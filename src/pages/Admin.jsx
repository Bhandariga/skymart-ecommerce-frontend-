// src/pages/Admin.jsx
import { useSelector } from 'react-redux'
import { useAuth } from '../hooks/useAuth'
import { Link } from 'react-router-dom'
import { formatNpr } from '../utils/currency'

const Admin = () => {
  const { user } = useAuth()
  const products = useSelector((state) => state.products.products)
  const orders = useSelector((state) => state.orders.orders)
  const users = useSelector((state) => state.auth.users || [])

  if (user?.role !== 'admin') {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">You don't have permission to access this page.</p>
        <Link to="/" className="btn-primary">Go Home</Link>
      </div>
    )
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
          <p className="text-gray-600 dark:text-gray-300">Total Products</p>
          <p className="text-3xl font-bold">{products.length}</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
          <p className="text-gray-600 dark:text-gray-300">Total Orders</p>
          <p className="text-3xl font-bold">{orders.length}</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
          <p className="text-gray-600 dark:text-gray-300">Total Users</p>
          <p className="text-3xl font-bold">{users.length || 2}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
          {orders.length === 0 ? (
            <p className="text-gray-500">No orders yet</p>
          ) : (
            <div className="space-y-2">
              {orders.slice(0, 5).map((order) => (
                <div key={order.id} className="flex justify-between items-center border-b py-2">
                  <span className="text-sm">Order #{order.id}</span>
                  <span className="text-sm text-gray-600">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </span>
                  <span className="font-medium">{formatNpr(order.total)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="btn-primary w-full">Add New Product</button>
            <button className="btn-secondary w-full">Manage Orders</button>
            <button className="btn-secondary w-full">Manage Users</button>
            <button className="btn-secondary w-full">View Reports</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin