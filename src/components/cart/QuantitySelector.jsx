// src/components/cart/QuantitySelector.jsx
const QuantitySelector = ({ quantity, onIncrease, onDecrease, max = 99 }) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={onDecrease}
        disabled={quantity <= 1}
        className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        -
      </button>
      <span className="w-8 text-center font-medium">{quantity}</span>
      <button
        onClick={onIncrease}
        disabled={quantity >= max}
        className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector