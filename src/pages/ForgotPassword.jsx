import { useState } from 'react'
import { Link } from 'react-router-dom'
import { validateEmail } from '../utils/validation'
import toast from 'react-hot-toast'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email')
      return
    }
    setSubmitted(true)
    toast.success('Password reset instructions sent to your email')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#070A0F] py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Reset Password</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Enter your email to receive reset instructions
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
          {submitted ? (
            <div className="text-center">
              <p className="text-green-600 mb-4">
                Check your email for password reset instructions
              </p>
              <Link to="/login" className="btn-primary inline-block">
                Back to Login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  placeholder="Enter your email"
                />
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Send Reset Instructions
              </button>
              
              <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                Remember your password?{' '}
                <Link to="/login" className="text-primary-600 hover:text-primary-700">
                  Login
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword