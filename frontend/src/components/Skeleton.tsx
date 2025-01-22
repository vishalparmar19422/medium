
const Skeleton = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 w-full max-w-2xl animate-pulse">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-gray-200"></div>
          <div className="ml-4">
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
            <div className="h-3 w-16 bg-gray-200 rounded mt-2"></div>
          </div>
        </div>
        <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
export default Skeleton