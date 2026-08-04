// src/pages/Login.jsx
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import LoginForm from '../components/auth/LoginForm'

const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const prevAuthRef = useRef(isAuthenticated)

  useEffect(() => {
    if (!prevAuthRef.current && isAuthenticated) {
      toast.success('Login successful 🎉')
    }
    prevAuthRef.current = isAuthenticated
  }, [isAuthenticated])

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg-secondary)] px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Welcome Back</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Sign in to your SkyMart account</p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white dark:bg-[#151B2B] p-8 shadow-premium dark:border-gray-700">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login