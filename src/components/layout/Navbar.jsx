// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth } from '../../hooks/useAuth'
import { useCart } from '../../hooks/useCart'
import MobileMenu from './MobileMenu'
import { User, ShoppingCart, LogOut } from 'lucide-react'
import toast from 'react-hot-toast'
import ThemeToggle from '../common/ThemeToggle'

const Navbar = () => {
  const { isAuthenticated, logout, user, checkAuth } = useAuth()
  const { totalQuantity } = useCart()
  const navigate = useNavigate()
  const wishlistItems = useSelector((state) => state.wishlist.items)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  

  useEffect(() => {
    checkAuth()
  }, [])

  const handleLogout = () => {
    logout()
    toast.success('Logged out successfully')
    navigate('/login')
  }

  const getDisplayName = () => {
    const email = user?.email || ''
    const raw = email.split('@')[0] || user?.name || ''
    if (!raw) return ''
    return raw.charAt(0).toUpperCase() + raw.slice(1)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#0B0F19] backdrop-blur-lg transition">
      <div className="container-custom">
        <div className="grid grid-cols-3 items-center" style={{ height: 60 }}>
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold tracking-tight text-primary-600 transition hover:opacity-90">SkyMart</Link>
          </div>

          <div className="flex justify-center">
            <nav className="flex items-center gap-8">
              <NavLink to="/" end className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-primary-600' : 'text-theme-secondary'} hover:text-primary-600`}>
                Home
              </NavLink>
              <NavLink to="/shop" className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-primary-600' : 'text-theme-secondary'} hover:text-primary-600`}>
                Shop
              </NavLink>
              <NavLink to="/wishlist" className={({ isActive }) => `text-sm font-medium transition relative ${isActive ? 'text-primary-600' : 'text-theme-secondary'} hover:text-primary-600`}>
                Wishlist
                {wishlistItems.length > 0 && (
                  <span className="absolute -right-3 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary-600 text-[10px] font-semibold text-black">{wishlistItems.length}</span>
                )}
              </NavLink>
            </nav>
          </div>

          <div className="flex justify-end items-center gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <button onClick={() => navigate('/profile')} className="flex items-center gap-2 text-sm text-theme-primary hover:text-primary-600">
                  <User className="h-5 w-5 text-theme-primary" />
                  <span>{getDisplayName()}</span>
                </button>

                <button onClick={() => navigate('/cart')} className="relative p-2 rounded-md hover:bg-white/5">
                  <ShoppingCart className="h-5 w-5 text-theme-primary" />
                  {totalQuantity > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-600 text-[10px] font-semibold text-black">{totalQuantity}</span>
                  )}
                </button>

                <button onClick={handleLogout} className="p-2 rounded-md hover:bg-white/5">
                  <LogOut className="h-5 w-5 text-theme-primary" />
                </button>
              </div>
            ) : (
              <div>
                <Link to="/login" className="text-sm font-medium text-[#F9FAFB]">Login</Link>
              </div>
            )}

            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md hover:bg-white/5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#F9FAFB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        cartCount={totalQuantity}
        wishlistCount={wishlistItems.length}
      />
    </nav>
  )
}

export default Navbar