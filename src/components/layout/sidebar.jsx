// src/components/layout/Sidebar.jsx (Extended with Submenu)
import { useState } from 'react'
// ... (previous imports)

const Sidebar = () => {
  // ... (previous state and hooks)
  const [expandedMenus, setExpandedMenus] = useState({})

  const toggleMenu = (menuKey) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }))
  }

  const menuItems = [
    {
      key: 'main',
      items: [
        { path: '/', label: 'Home', icon: HomeIcon },
        { path: '/shop', label: 'Shop', icon: ShoppingBagIcon },
        { path: '/wishlist', label: 'Wishlist', icon: HeartIcon, badge: wishlistItems.length },
        { path: '/cart', label: 'Cart', icon: CartIcon, badge: totalQuantity },
      ]
    },
    {
      key: 'account',
      label: 'Account',
      icon: UserIcon,
      items: [
        { path: '/profile', label: 'My Profile', icon: UserIcon },
        { path: '/orders', label: 'Orders', icon: OrdersIcon },
        ...(user?.role === 'admin' ? [{ path: '/admin', label: 'Admin Dashboard', icon: AdminIcon }] : []),
      ]
    }
  ]

  return (
    <aside className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-[#111827] shadow-2xl z-50 transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0 flex flex-col`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
          SkyMart
        </Link>
        {isAuthenticated && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Welcome, {user?.name || 'User'}!
          </p>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {menuItems.map((menu) => (
            <li key={menu.key}>
              {menu.label && (
                <button
                  onClick={() => toggleMenu(menu.key)}
                  className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                >
                  <span className="flex items-center">
                    <span className="mr-2">{menu.icon && <menu.icon />}</span>
                    {menu.label}
                  </span>
                  <span>{expandedMenus[menu.key] ? '▼' : '▶'}</span>
                </button>
              )}
              <ul className={`space-y-1 ${expandedMenus[menu.key] || !menu.label ? '' : 'hidden'}`}>
                {menu.items.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 group ${
                        isActive(item.path)
                          ? 'bg-primary-50 dark:bg-[#151B2B] text-primary-600 dark:text-lime-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#151B2B]'
                      }`}
                      onClick={() => isMobile && setIsOpen(false)}
                    >
                      <span className={`text-xl mr-3 ${
                        isActive(item.path) ? 'text-primary-600 dark:text-lime-400' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200'
                      }`}>
                        <item.icon />
                      </span>
                      <span className="flex-1 font-medium">{item.label}</span>
                      {item.badge > 0 && (
                        <span className="bg-primary-600 text-[#111827] text-xs font-bold px-2.5 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Auth Actions */}
        {!isAuthenticated && (
          <div className="mt-6 space-y-2">
            <Link
              to="/login"
              className="block w-full text-center btn-primary"
              onClick={() => isMobile && setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        )}

        {isAuthenticated && (
          <div className="mt-6">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center px-4 py-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-200"
            >
              <span className="text-xl mr-3"><LogoutIcon /></span>
              <span className="font-medium">Logout</span>
            </button>
          </div>
        )}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Theme
          </span>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-[#151B2B] hover:bg-gray-200 dark:hover:bg-[#1F2937] transition-colors"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
          © 2024 SkyMart. All rights reserved.
        </div>
      </div>
    </aside>
  )
}

export default Sidebar