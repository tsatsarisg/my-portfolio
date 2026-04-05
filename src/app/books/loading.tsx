export default function BooksLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="sticky top-0 border-b bg-white/90 dark:bg-gray-900/90 border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="h-10 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
      </header>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-20 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"
            />
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
