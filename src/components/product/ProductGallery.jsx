// src/components/product/ProductGallery.jsx
import { useState } from 'react'
import ImageWithFallback from '../common/ImageWithFallback'

const ProductGallery = ({ images, name }) => {
  const [selectedImage, setSelectedImage] = useState(images[0] || '')

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-gray-100 dark:bg-[#111827] overflow-hidden">
        <div className="h-96 w-full">
          <ImageWithFallback src={selectedImage} alt={name} containerClass="h-96 w-full" imgClass="h-full w-full object-contain" />
        </div>
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`aspect-square overflow-hidden rounded-lg border-2 ${
                selectedImage === image ? 'border-primary-600' : 'border-transparent'
              }`}
            >
              <ImageWithFallback src={image} alt={`${name} ${index + 1}`} containerClass="h-full w-full" imgClass="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductGallery   