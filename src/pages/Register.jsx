import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import RegisterForm from '../components/auth/RegisterForm'

const Register = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const prevAuthRef = useRef(isAuthenticated)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state?.from !== 'login') {
      navigate('/login')
    }
  }, [])

  useEffect(() => {
    if (!prevAuthRef.current && isAuthenticated) {
      toast.success('Account created successfully')
    }
    prevAuthRef.current = isAuthenticated
  }, [isAuthenticated])

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg-secondary)] px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Create Account</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Join SkyMart today</p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white dark:bg-[#151B2B] p-8 shadow-premium dark:border-gray-700">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export default Register