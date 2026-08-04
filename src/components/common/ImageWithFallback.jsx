import { useState } from 'react'

const FALLBACK = 'https://placehold.co/400x400?text=Image+Unavailable&bg=efefef&fg=555'

const ImageWithFallback = ({ src, alt, className = '', containerClass = '', style = {}, imgClass = '' }) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const handleLoad = () => setLoaded(true)
  const handleError = () => setError(true)

  const finalSrc = error || !src ? FALLBACK : src

  return (
    <div className={`relative overflow-hidden ${containerClass}`} style={style}>
      {!loaded && (
          <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-[#111827]`}>
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-gray-500" />
        </div>
      )}
      <img
        src={finalSrc}
        alt={alt}
        className={`${imgClass} ${loaded ? '' : 'opacity-0'} ${className}`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
}

export default ImageWithFallback
