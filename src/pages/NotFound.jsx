// src/pages/NotFound.jsx
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container-custom py-16 text-center">
      <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-300 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">
        Go Home
      </Link>
    </div>
  )
}

export default NotFound