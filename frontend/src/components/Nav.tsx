import { BookOpen, Menu,X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <nav className="border-b border-gray-200 fixed w-full bg-white z-10">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-green-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Penwise</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/blog" className="text-gray-600 hover:text-green-600">Home</Link>
                <Link to="/aboutus" className="text-gray-600 hover:text-green-600">About</Link>
                <Link to="/profile" className="text-gray-600 hover:text-green-600">Profile</Link>
                <Link to={"/writeblog"} className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
                  Write
                </Link>
              </div>
              <button 
             className="block md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
    
          {/* Mobile menu */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-200">
              <Link
                to="/blog"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
              >
                Home
              </Link>
              <Link
                to="/aboutus"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
              >
                About Us
              </Link>
              <Link
                to="/profile"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
              >
                Profile
              </Link>
              <Link to={"/writeblog"} className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700">
                Write
              </Link>
            </div>
          </div>
        </nav>
      );
}

export default Nav