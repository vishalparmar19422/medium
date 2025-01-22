import { useNavigate } from "react-router";
interface BlogDetail {
  authorName: string;
  title: string;
  content: string;
  date: Date;
  id: number;
}
const BlogCard = ({ authorName, title, content, date, id }: BlogDetail) => {
  const navigate = useNavigate();
  const truncateText = (description: string, wordLimit = 100) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description; // Return the original content if it's under the limit
  };

  const truncatedContent = truncateText(content);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-6">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white font-semibold text-lg shadow-sm ring-2 ring-green-100">
            {authorName[0].toUpperCase()}
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">{authorName}</p>
            <p className="text-sm text-gray-500">
              {date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 line-clamp-3">{truncatedContent}</p>
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => navigate(`/fullblog/${id}`)} 
            className="text-green-600 hover:text-green-800 text-sm font-medium"
          >
            Read more
          </button>
          <div className="flex space-x-2">
            <span className="px-3 py-1 rounded-full text-sm bg-green-50 text-green-600">
              {authorName}
            </span>
            <span className="px-3 py-1 rounded-full text-sm bg-green-50 text-green-600">
              {date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
