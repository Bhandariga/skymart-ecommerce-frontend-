import { useState } from 'react'

const PaymentMethod = ({ selected, onChange }) => {
  const methods = [
    { id: 'credit', name: 'Credit Card', icon: '💳' },
    { id: 'paypal', name: 'PayPal', icon: '💰' },
    { id: 'cash', name: 'Cash on Delivery', icon: '💵' },
  ]

  return (
    <div className="space-y-3">
      <h4 className="font-semibold">Payment Method</h4>
      <div className="space-y-2">
        {methods.map((method) => (
          <label key={method.id} className="flex items-center space-x-3 rounded-lg border border-gray-200 dark:border-gray-700 p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-[#151B2B]">
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selected === method.id}
              onChange={() => onChange(method.id)}
              className="w-4 h-4 text-primary-600"
            />
            <span className="text-xl">{method.icon}</span>
            <span>{method.name}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default PaymentMethod