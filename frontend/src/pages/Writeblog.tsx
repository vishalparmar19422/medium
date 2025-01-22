import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import Nav from "../components/Nav";

const WriteBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [discription, setdiscription] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


  const publishBlog  = async()=>{
    setIsPublishing(true);
    const res = await axios.post(`${BACKEND_URL}/api/v1/blog/create`,{
      title,
      discription
    },{
      headers:{
        Authorization:localStorage.getItem("token"),
      },
      
    })
    navigate(`/fullblog/${res.data.id}`);
  }

 

  return (
    <>
    <Nav/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-28 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Create New Blog Post</h1>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Title
              </label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                placeholder="Enter your blog post title"
                className="w-full px-4 py-3 text-xl font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                type="text"
              />
            </div>
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Content
              </label>
              <textarea
                onChange={(e) => setdiscription(e.target.value)}
                id="content"
                rows={12}
                placeholder="Start writing your blog post here..."
                className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 resize-none"
              ></textarea>
            </div>
            <div className="flex justify-end pt-4">
              <button
                disabled={isPublishing || !title.trim() || !discription.trim()}
                onClick={publishBlog}
                className={`inline-flex items-center px-6 py-2.5 text-sm font-medium rounded-lg transition duration-200
                  ${isPublishing || !title.trim() || !discription.trim()
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                }`}
              >
                {isPublishing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Publishing...
                  </>
                ) : (
                  'Publish Post'
                )}
                
              </button>
            </div>
          </div>
        </div>
        
        {/* Writing Tips */}
        <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Writing Tips</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Keep your title clear and engaging
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Break your content into paragraphs for better readability
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Use examples to illustrate your points
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Review your post before publishing
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default WriteBlog;