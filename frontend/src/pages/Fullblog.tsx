import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "../components/Skeleton";

function Fullblog() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog]: any = useState([]);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  

  const getBlog = async () => {
    const res = await axios.get(`${BACKEND_URL}/api/v1/blog/get/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    setBlog(res.data.blog);
    
    


    setLoading(false);
  };
  useEffect(() => {
     getBlog();
     

  }, []);

  if(loading){
    return (
      <div className="min-h-screen bg-gray-50">
        <Nav />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
          <div className="space-y-6">
            <Skeleton />
           
          </div>
        </div>
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-white">
      <Nav />

      <main className="pt-16">
        {" "}
        <article className="max-w-4xl mx-auto py-12 px-6">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            {blog.title}
          </h1>
          <p className="text-gray-600 mb-8 text-md">
          {new Date(blog.createdAt).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
})}
          </p>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-4/5">
              <p className="text-lg leading-relaxed mb-6">{blog.discription}</p>  
            </div>
            <aside className="md:w-1/5 mt-8 md:mt-0">
              <div className="sticky top-24 bg-gray-50 p-6 rounded-lg">
                <div className="avatar h-12 w-12 text-xl bg-green-600 text-white flex justify-center items-center rounded-full mb-4">
                  {blog.user.username[0].toUpperCase()}
                </div>
                <h4 className="text-lg font-semibold mb-2">{blog.user.username}</h4>
                
                <button className="mt-4 w-full bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                  Follow
                </button>
              </div>
            </aside>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                About
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Membership
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Write
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Fullblog;
