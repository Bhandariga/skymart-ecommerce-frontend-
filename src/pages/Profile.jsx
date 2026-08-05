import { useAuth } from '../hooks/useAuth'

const Profile = () => {
  const { user } = useAuth()

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 max-w-2xl">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-3xl">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user?.name || 'User'}</h2>
            <p className="text-gray-600 dark:text-gray-300">{user?.email}</p>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <h3 className="font-semibold mb-2">Account Details</h3>
          <dl className="space-y-2">
            <div className="flex justify-between">
              <dt className="text-gray-600 dark:text-gray-300">Name</dt>
              <dd className="dark:text-gray-200">{user?.name}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-600 dark:text-gray-300">Email</dt>
              <dd className="dark:text-gray-200">{user?.email}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-600 dark:text-gray-300">Role</dt>
              <dd className="capitalize dark:text-gray-200">{user?.role || 'User'}</dd>
            </div>
          </dl>
        </div>
        
        {user?.address && (
          <div className="border-t pt-4 mt-4">
            <h3 className="font-semibold mb-2">Shipping Address</h3>
            <dl className="space-y-1 text-gray-600 dark:text-gray-300">
              <dd>{user.address.street}</dd>
              <dd>{user.address.city}, {user.address.state} {user.address.zip}</dd>
              <dd>{user.address.country}</dd>
            </dl>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile