import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAuth } from '../../hooks/useAuth'

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zip: yup.string().required('ZIP code is required'),
  country: yup.string().required('Country is required'),
})

const CheckoutForm = ({ onSubmit, loading }) => {
  const { user } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: user?.name?.split(' ')[0] || '',
      lastName: user?.name?.split(' ')[1] || '',
      email: user?.email || '',
      address: user?.address?.street || '',
      city: user?.address?.city || '',
      state: user?.address?.state || '',
      zip: user?.address?.zip || '',
      country: user?.address?.country || 'USA',
    }
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            First Name
          </label>
          <input {...register('firstName')} className="input-field" />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Last Name
          </label>
          <input {...register('lastName')} className="input-field" />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input {...register('email')} type="email" className="input-field" />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Phone
        </label>
        <input {...register('phone')} className="input-field" />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Address
        </label>
        <input {...register('address')} className="input-field" />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            City
          </label>
          <input {...register('city')} className="input-field" />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            State
          </label>
          <input {...register('state')} className="input-field" />
          {errors.state && (
            <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            ZIP Code
          </label>
          <input {...register('zip')} className="input-field" />
          {errors.zip && (
            <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Country
          </label>
          <input {...register('country')} className="input-field" />
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
          )}
        </div>
      </div>

      <button type="submit" className="btn-primary w-full" disabled={loading}>
        {loading ? 'Processing...' : 'Place Order'}
      </button>
    </form>
  )
}

export default CheckoutForm