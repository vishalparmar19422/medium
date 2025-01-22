import Skeleton from "../components/Skeleton";
import BlogCard from "../components/Blogcard";
import Nav from "../components/Nav";
import useBlog from "../hooks/blogsData";

// Simulated data for demonstration







function Blog() {
  const { loading, blogs } = useBlog();
  


  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Nav />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
          <div className="space-y-6">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                authorName={blog.user.username}
                title={blog.title}
                content={blog.discription}
                date={new Date(blog.createdAt)}
                id={blog.id}
              />
            ))}
          </div>
          <div className="hidden lg:block">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm bg-green-50 text-green-600">
                  React
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-green-50 text-green-600">
                  TypeScript
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-green-50 text-green-600">
                  JavaScript
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-green-50 text-green-600">
                  Web Development
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-green-50 text-green-600">
                  CSS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
