// src/data/products.js
import { categories as categoryData } from './categories'

export const products = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium noise-cancelling headphones with 40-hour battery life',
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 234,
    category: 'Electronics',
    image: '/images/headphones.jpg',
    images: ['/images/headphones-1.jpg', '/images/headphones-2.jpg'],
    inStock: true,
    isNew: true,
    isFeatured: true,
    specs: {
      brand: 'SoundMaster',
      connectivity: 'Bluetooth 5.0',
      batteryLife: '40 hours',
      color: 'Black'
    }
  },
  {
    id: 2,
    name: 'Smart Fitness Tracker Watch',
    description: 'Advanced health monitoring with GPS and heart rate sensor',
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.6,
    reviews: 189,
    category: 'Wearables',
    image: '/images/watch.jpg',
    images: ['/images/watch-1.jpg', '/images/watch-2.jpg'],
    inStock: true,
    isNew: true,
    isFeatured: true,
    specs: {
      brand: 'FitTech',
      display: 'AMOLED 1.5"',
      features: 'GPS, Heart Rate, Sleep Tracking',
      color: 'Silver'
    }
  },
  {
    id: 3,
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable organic cotton t-shirt with classic fit',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.5,
    reviews: 156,
    category: 'Clothing',
    image: '/images/tshirt.jpg',
    images: ['/images/tshirt-1.jpg', '/images/tshirt-2.jpg'],
    inStock: true,
    isNew: false,
    isFeatured: true,
    specs: {
      material: '100% Organic Cotton',
      sizes: ['S', 'M', 'L', 'XL'],
      color: 'Navy Blue',
      care: 'Machine Wash'
    }
  },
  {
    id: 4,
    name: 'Professional Chef Knife Set',
    description: 'High-carbon stainless steel knife set with ergonomic handles',
    price: 199.99,
    originalPrice: 259.99,
    rating: 4.9,
    reviews: 312,
    category: 'Kitchen',
    image: '/images/knife.jpg',
    images: ['/images/knife-1.jpg', '/images/knife-2.jpg'],
    inStock: true,
    isNew: false,
    isFeatured: false,
    specs: {
      brand: 'ChefPro',
      material: 'High-carbon Steel',
      pieces: 5,
      handle: 'Ergonomic Wood'
    }
  },
  {
    id: 5,
    name: 'Yoga Mat Premium',
    description: 'Eco-friendly non-slip yoga mat with alignment lines',
    price: 45.99,
    originalPrice: 59.99,
    rating: 4.4,
    reviews: 98,
    category: 'Sports',
    image: '/images/yoga.jpg',
    images: ['/images/yoga-1.jpg', '/images/yoga-2.jpg'],
    inStock: true,
    isNew: true,
    isFeatured: false,
    specs: {
      material: 'Natural Rubber',
      thickness: '6mm',
      size: '72" x 26"',
      color: 'Purple'
    }
  },
  {
    id: 6,
    name: 'Smartphone 5G Pro',
    description: 'Next-gen 5G smartphone with 108MP camera and 120Hz display',
    price: 799.99,
    originalPrice: 899.99,
    rating: 4.7,
    reviews: 567,
    category: 'Electronics',
    image: '/images/phone.jpg',
    images: ['/images/phone-1.jpg', '/images/phone-2.jpg'],
    inStock: true,
    isNew: true,
    isFeatured: true,
    specs: {
      brand: 'TechNova',
      display: '6.8" AMOLED 120Hz',
      camera: '108MP Triple',
      storage: '256GB',
      battery: '5000mAh'
    }
  }
]

export const categories = categoryData.map((category) => category.name)

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id))
}

export const getProductsByCategory = (category) => {
  if (!category) return products
  return products.filter(product => product.category === category)
}

export const getFeaturedProducts = () => {
  return products.filter(product => product.isFeatured)
}

export const getNewProducts = () => {
  return products.filter(product => product.isNew)
}