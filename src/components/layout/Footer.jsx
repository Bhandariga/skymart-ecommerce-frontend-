const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-700 bg-[#0B0F19] text-white">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">SkyMart</h3>
            <p className="text-sm leading-7 text-gray-400 dark:text-gray-300">
              Premium products, thoughtful design, and a shopping experience that feels effortless.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="transition hover:text-white">About Us</a></li>
              <li><a href="#" className="transition hover:text-white">Contact</a></li>
              <li><a href="#" className="transition hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="transition hover:text-white">Electronics</a></li>
              <li><a href="#" className="transition hover:text-white">Clothing</a></li>
              <li><a href="#" className="transition hover:text-white">Books</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Follow Us</h4>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="transition hover:text-lime-400">📘</a>
              <a href="#" className="transition hover:text-lime-400">🐦</a>
              <a href="#" className="transition hover:text-lime-400">📸</a>
              <a href="#" className="transition hover:text-lime-400">▶️</a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 SkyMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer