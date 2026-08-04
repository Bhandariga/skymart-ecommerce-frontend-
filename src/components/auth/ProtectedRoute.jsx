// src/components/auth/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import Loader from '../common/Loader'
import toast from 'react-hot-toast'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading, checkAuth } = useAuth()

  if (loading) {
    return <Loader size="lg" className="min-h-screen" />
  }

  if (!isAuthenticated && !checkAuth()) {
    toast.error('Please login first')
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute