import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { validateEmail, validatePassword } from '../../utils/validation'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const { login, loading, error } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    login({ name: formData.name, email: formData.email }, 'fake-token-123')
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
          placeholder="Enter your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

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
          placeholder="Create a password"
        />
        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="input-field"
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
      </div>

      {error && <div className="text-sm text-red-500">{error}</div>}

      <button type="submit" className="btn-primary w-full" disabled={loading}>
        {loading ? 'Creating account...' : 'Create Account'}
      </button>

      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-lime-600 transition hover:text-lime-700">
          Login
        </Link>
      </p>
    </form>
  )
}

export default RegisterForm