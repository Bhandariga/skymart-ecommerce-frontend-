const ReviewCard = ({ review }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4 last:border-0">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="font-semibold">{review.user}</p>
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={`text-sm ${
                i < review.rating ? 'text-yellow-400' : 'text-gray-300'
              }`}>★</span>
            ))}
          </div>
        </div>
        <span className="text-sm text-gray-500">{review.date}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
      {review.helpful && (
        <div className="mt-2 text-sm text-gray-500">
          {review.helpful} people found this helpful
        </div>
      )}
    </div>
  )
}

export default ReviewCard