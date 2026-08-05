const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  loading = false, 
  disabled = false, 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200'
  
  const variants = {
    primary: 'bg-lime-500 text-[#111827] hover:bg-lime-400 shadow-sm',
    secondary: 'bg-transparent text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800',
    success: 'bg-emerald-600 text-white hover:bg-emerald-500',
    danger: 'bg-red-600 text-white hover:bg-red-500',
    outline: 'border-2 border-lime-500 text-lime-600 hover:bg-lime-500/10',
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${
        (disabled || loading) ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="inline-block animate-spin mr-2">⟳</span>
      ) : null}
      {children}
    </button>
  )
}

export default Button