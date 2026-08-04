const ProductSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="card animate-pulse overflow-hidden">
          <div className="h-56 bg-gray-200 dark:bg-gray-700" />
          <div className="space-y-3 p-4">
            <div className="h-4 w-2/3 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
            <div className="flex justify-between">
              <div className="h-6 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
              <div className="h-9 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductSkeleton
