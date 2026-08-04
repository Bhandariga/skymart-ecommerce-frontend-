// src/components/auth/LoginForm.jsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { validateEmail, validatePassword } from '../../utils/validation'

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const { login, loading, error } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Simulate login - in real app, this would be an API call
    login({ email: formData.email, name: 'User' }, 'fake-token-123')
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          placeholder="Enter your email"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="input-field"
          placeholder="Enter your password"
        />
        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
      </div>

      {error && <div className="text-sm text-red-500">{error}</div>}

      <button type="submit" className="btn-primary w-full" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>

      <div className="space-y-2 text-center">
        <Link to="/forgot-password" className="text-sm font-medium text-lime-600 transition hover:text-lime-700">
          Forgot Password?
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <Link to="/register" state={{ from: 'login' }} className="font-semibold text-lime-600 transition hover:text-lime-700">
            Create account
          </Link>
        </p>
      </div>
    </form>
  )
}

export default LoginForm