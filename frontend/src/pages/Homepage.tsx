import { BookOpen, Quote } from 'lucide-react';
import { useNavigate } from 'react-router';


function Homepage() {
    const Navigate = useNavigate();
    return (
        <div className="min-h-screen bg-white">
          {/* Navigation */}
          <nav className="border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <BookOpen className="h-8 w-8 text-green-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">Penwise</span>
                </div>
                <div className="flex items-center space-x-4">
                  <button onClick={()=>{Navigate("/signin")}} className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
                    Sign in
                  </button>
                  <button onClick={()=>{Navigate("/signup")}} className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </nav>
    
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-900 mb-6">
                Stay curious.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Discover stories, thinking, and expertise from writers on any topic. Share your ideas with millions of readers.
              </p>
              <button onClick={()=>{Navigate("/signin")}} className="bg-green-600 text-white px-8 py-3 rounded-full text-xl font-medium hover:bg-gray-800 transition-colors">
                Start reading
              </button>
            </div>
          </div>
    
          {/* Trending Section */}
          {/* Quotes Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Quote className="h-6 w-6 text-green-600" />
            <h2 className="ml-2 text-2xl text-gray-900 font-bold">Inspiring Quotes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Quote className="h-8 w-8 text-green-600 mb-4" />
              <p className="text-lg text-gray-800 mb-6 italic">
                "Nothing ever goes as planned in this world. The longer you live, the more you realize."
              </p>
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-900">Madara Uchiha</p>
                  <p className="text-sm text-gray-500">Bad dude Good Qoute</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Quote className="h-8 w-8 text-green-600 mb-4" />
              <p className="text-lg text-gray-800 mb-6 italic">
                "Success is not final, failure is not fatal: it is the courage to continue that counts."
              </p>
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-900">Winston Churchill</p>
                  <p className="text-sm text-gray-500">Former Prime Minister</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Quote className="h-8 w-8 text-green-600 mb-4" />
              <p className="text-lg text-gray-800 mb-6 italic">
                "Innovation distinguishes between a leader and a follower."
              </p>
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-900">Steve Jobs</p>
                  <p className="text-sm text-gray-500">Apple Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">About</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Story</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Membership</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Write</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Help</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact us</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      );
    }
    

export default Homepage;