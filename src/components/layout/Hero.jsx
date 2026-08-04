import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ImageWithFallback from '../common/ImageWithFallback'
import { formatNpr } from '../../utils/currency'
import { Link } from 'react-router-dom'

const Hero = () => {
  const { products = [] } = useSelector((state) => state.products)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const showcase = products.slice(0, 3)

  return (
    <section className="w-full" style={{ background: 'linear-gradient(135deg,#050505 0%,#111827 100%), radial-gradient(800px 240px at 15% 25%, rgba(132,204,22,0.15), transparent)' }}>
      <div className="container-custom flex min-h-[70vh] items-center py-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <div className={`transform transition duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <p className="inline-block rounded-full bg-black/40 border border-[rgba(132,204,22,0.12)] px-3 py-1 text-sm font-medium text-[rgba(132,204,22,0.9)]">Premium Picks</p>
            </div>

            <h1 className={`text-4xl sm:text-5xl font-extrabold leading-tight text-[#F9FAFB] transform transition duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Elevated essentials for the modern life
              <span className="block text-[#84CC16]">Curated. Elegant. Timeless.</span>
            </h1>

            <p className={`max-w-xl text-base text-[#CBD5E1] transform transition duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Discover quality products with refined design and thoughtful details. Shop curated collections that blend form and function.
            </p>

            <div className={`flex flex-wrap gap-3 mt-2 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
              <Link to="/shop" className="inline-flex items-center gap-2 rounded-lg bg-[#84CC16] px-5 py-3 text-black font-semibold transition hover:bg-[#A3E635]">Shop Now</Link>
              <Link to="/wishlist" className="inline-flex items-center gap-2 rounded-lg border border-[#374151] bg-white/5 dark:bg-white/5 px-5 py-3 text-[#F9FAFB] font-semibold backdrop-blur transition hover:scale-[1.02]">View Wishlist</Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="rounded-3xl bg-gradient-to-tr from-black/40 via-transparent to-white/2 p-6 shadow-2xl backdrop-blur-lg">
                <div className="h-80 w-full overflow-hidden rounded-xl bg-[#0B1220] flex items-center justify-center">
                  {showcase[0] ? (
                    <ImageWithFallback src={showcase[0].image} alt={showcase[0].title} containerClass="h-80 w-full" imgClass="h-full w-full object-contain" />
                  ) : (
                    <ImageWithFallback src="" alt="showcase" containerClass="h-80 w-full" imgClass="h-full w-full object-contain" />
                  )}
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                {showcase.slice(1).map((p, idx) => (
                  <div key={p?.id || idx} className={`relative w-1/2 rounded-xl overflow-hidden bg-[#071023] p-3 transform transition duration-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ boxShadow: '0 10px 30px rgba(2,6,23,0.6)' }}>
                    <div className="h-36 w-full overflow-hidden rounded-md">
                      <ImageWithFallback src={p?.image} alt={p?.title} containerClass="h-36 w-full" imgClass="h-full w-full object-cover" />
                    </div>
                    <div className="mt-2">
                      <div className="text-sm font-semibold text-[#F9FAFB] truncate">{p?.title}</div>
                      <div className="text-sm text-[#CBD5E1]">{formatNpr(p?.price)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
