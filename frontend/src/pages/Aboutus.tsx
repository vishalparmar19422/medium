import { Users, Feather, Globe, BookOpen } from "lucide-react";
import Nav from "../components/Nav";
import { useNavigate } from "react-router";

function AboutUs() {
  const Navigate = useNavigate();
  return (
    <>
      <Nav />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-6">
              Welcome to <span className="text-green-600">Penwise</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Where ideas flourish and stories come to life. We're building a
              community of passionate writers and curious readers.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Penwise is more than just a blogging platform – it's a sanctuary
                for thoughts, ideas, and stories that deserve to be shared with
                the world. We believe in the power of words to inspire, educate,
                and connect people across boundaries.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Users className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community First
              </h3>
              <p className="text-gray-600">
                Join a thriving community of writers, thinkers, and readers who
                support and inspire each other.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Feather className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Write Freely
              </h3>
              <p className="text-gray-600">
                Express yourself without constraints. Our platform is designed
                to let your creativity flow naturally.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <Globe className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Global Reach
              </h3>
              <p className="text-gray-600">
                Share your stories with readers from around the world and make
                an impact globally.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet Our Team</h2>
          <div className="flex justify-center">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300" 
                alt="Vishal Parmar" 
                className="w-40 h-40 rounded-full mx-auto object-cover"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Vishal Parmar</h3>
                <p className="text-lg text-gray-600">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>

          {/* Call to Action */}
          <div className="bg-green-600 rounded-2xl shadow-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Share Your Story?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join our community of writers and start sharing your ideas with
              the world.
            </p>
            <button
              onClick={() => Navigate("/writeblog")}
              className="bg-white text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Start Writing Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
