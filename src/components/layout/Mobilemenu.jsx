import { Link } from 'react-router-dom'

const MobileMenu = ({ isOpen, onClose, isAuthenticated, onLogout, cartCount, wishlistCount }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl dark:bg-[#0B0F19]/95 md:hidden">
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 dark:border-gray-700">
        <span className="text-lg font-semibold text-gray-900 dark:text-white">Menu</span>
        <button onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-xl shadow-sm dark:border-gray-700 dark:bg-[#151B2B] dark:text-gray-100">✕</button>
      </div>

      <div className="space-y-2 p-4">
        <Link to="/" onClick={onClose} className="block rounded-2xl px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">Home</Link>
        <Link to="/shop" onClick={onClose} className="block rounded-2xl px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">Shop</Link>
        <Link to="/wishlist" onClick={onClose} className="block rounded-2xl px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">Wishlist {wishlistCount > 0 && `(${wishlistCount})`}</Link>
        <Link to="/cart" onClick={onClose} className="block rounded-2xl px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">Cart {cartCount > 0 && `(${cartCount})`}</Link>

        {isAuthenticated ? (
          <>
            <Link to="/profile" onClick={onClose} className="block rounded-2xl px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">Profile</Link>
            <Link to="/orders" onClick={onClose} className="block rounded-2xl px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">Orders</Link>
            <button onClick={() => { onLogout(); onClose() }} className="block w-full rounded-2xl px-3 py-3 text-left text-sm font-medium text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950/40">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={onClose} className="block rounded-2xl px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">Login</Link>
          
          </>
        )}
      </div>
    </div>
  )
}

export default MobileMenu