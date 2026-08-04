// src/components/common/Modal.jsx
import { useEffect } from 'react'

const Modal = ({ isOpen, onClose, title, children, className = '' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className={`relative bg-white dark:bg-[#151B2B] rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto ${className}`}>
        {title && (
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button onClick={onClose} className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
              ✕
            </button>
          </div>
        )}
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export default Modal