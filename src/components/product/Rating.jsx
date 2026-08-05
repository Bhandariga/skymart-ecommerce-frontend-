const Rating = ({ rating, reviews }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1)

  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => (
        <span key={star} className={`text-base ${star <= Math.round(rating) ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600'}`}>
          ★
        </span>
      ))}
      {reviews && (
        <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">({reviews} reviews)</span>
      )}
    </div>
  )
}

export default Rating