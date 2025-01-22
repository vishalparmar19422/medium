import { Pencil, BookOpen, Heart ,PenLine} from "lucide-react";
import BlogCard from "../components/Blogcard";
import useProfileData from "../hooks/profileData";
import Nav from "../components/Nav";
import Skeleton from "../components/Skeleton";
import { useNavigate } from "react-router";

function Profile() {
  const { loading, userdata } = useProfileData();
const Navigate = useNavigate();
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Banner */}
        <div className="h-[200px] bg-gradient-to-r from-green-600 to-green-800" />

        <div className="max-w-4xl mx-auto px-4 -mt-24">
          {/* Profile Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="relative h-32 w-32 rounded-full border-4 border-white shadow-lg overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                      {loading ? "loding....." : userdata?.username}
                    </h1>
                    <p className="text-green-600 font-medium mt-1">
                      Tech Writer & Developer
                    </p>
                  </div>
                  <button className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors">
                    <Pencil className="h-4 w-4 mr-2" />
                    Edit Profile
                  </button>
                </div>
                <p className="text-gray-600 mt-4 text-lg">
                  Writing about technology, development, and the future of web.
                  Passionate about sharing knowledge and building great
                  software.
                </p>
                <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1 text-green-600" />
                    <span>3 stories</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1 text-green-600" />
                    <span>369 likes</span>
                  </div>
                  <span>Member since Mar 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Posts Section */}
          {loading ? (
  // Display skeletons while loading
  <>
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </>
) : userdata?.blogs && userdata.blogs.length > 0 ? (
  // Display blogs if they exist
  userdata.blogs.map((blog) => (
    <BlogCard
      key={blog.id}
      authorName={userdata.username}
      title={blog.title}
      content={blog.discription} // Ensure correct spelling
      date={new Date(blog.createdAt)}
      id={blog.id}
    />
  ))
) : (
  // Fallback message when no blogs are available
  <div className="bg-white rounded-xl shadow-lg p-12 text-center">
    <div className="flex justify-center mb-6">
      <div className="bg-green-100 p-4 rounded-full">
        <PenLine className="h-8 w-8 text-green-600" />
      </div>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      Start Your Writing Journey
    </h3>
    <p className="text-gray-600 mb-6">
      Your blog posts will appear here. Share your thoughts, experiences, and expertise with the world.
    </p>
    <button
      onClick={() => Navigate("/writeblog")}
      className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
    >
      <Pencil className="h-4 w-4 mr-2" />
      Create Your First Post
    </button>
  </div>
)}


        </div>
      </div>
    </>
  );
}

export default Profile;
