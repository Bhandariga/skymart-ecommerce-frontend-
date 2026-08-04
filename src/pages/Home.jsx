// src/pages/Home.jsx
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductGrid from '../components/product/ProductGrid'
import { fetchProducts } from '../redux/slices/productSlice'
import Hero from '../components/layout/Hero'

const Home = () => {
  const dispatch = useDispatch()
  const { products, categories } = useSelector((state) => state.products)

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(fetchProducts())
    }
  }, [dispatch])

  const featuredProducts = products.slice(0, 6)
  const newProducts = products.slice(6, 12)


  return (
    <div className="pb-16">
      <Hero />

      <div className="container-custom py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">Browse by category</p>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Featured Categories</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {Array.isArray(categories) && categories.map((cat, idx) => (
            <Link
              key={cat || idx}
              to={`/shop?category=${encodeURIComponent(cat)}`}
              className="card rounded-2xl p-4 text-center transition duration-300 hover:-translate-y-1 hover:shadow-premium"
            >
              <div className="mb-3 text-4xl">{cat?.charAt(0)?.toUpperCase()}</div>
              <p className="font-semibold text-gray-900 dark:text-white capitalize">{cat}</p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Explore {cat}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="container-custom py-4">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">Curated picks</p>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Featured Products</h2>
          </div>
          <Link to="/shop" className="text-sm font-semibold text-lime-600 transition hover:text-lime-700">View All →</Link>
        </div>
        <ProductGrid products={featuredProducts} columns={4} />
      </div>

      <div className="mt-8 border-t border-gray-200 bg-gray-50/80 py-16 dark:border-gray-700 dark:bg-[#111827]/60">
        <div className="container-custom">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600">Fresh arrivals</p>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">New Arrivals</h2>
            </div>
            <Link to="/shop" className="text-sm font-semibold text-lime-600 transition hover:text-lime-700">View All →</Link>
          </div>
          <ProductGrid products={newProducts} columns={4} />
        </div>
      </div>
    </div>
  )
}

export default Home