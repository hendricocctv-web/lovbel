import { Outlet, Link } from 'react-router-dom'
import { Heart, Menu, X } from 'lucide-react'
import { useState } from 'react'

interface LayoutProps {
  isLoggedIn: boolean
}

export default function Layout({ isLoggedIn }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary fill-primary" />
              <span className="text-2xl font-bold text-gray-800">Lovbel</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-600 hover:text-primary transition">
                Home
              </Link>
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" className="text-gray-600 hover:text-primary transition">
                    Dashboard
                  </Link>
                  <Link to="/profile" className="text-gray-600 hover:text-primary transition">
                    Profile
                  </Link>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-2 text-gray-600 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {isLoggedIn ? (
                <>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-600 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-600 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="w-full text-left px-4 py-2 bg-primary text-white rounded"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="block px-4 py-2 bg-primary text-white rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-primary fill-primary" />
                <span className="text-xl font-bold">Lovbel</span>
              </div>
              <p className="text-gray-400">
                Connect hearts, build relationships, find love.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
                <li><Link to="/" className="hover:text-primary transition">About</Link></li>
                <li><Link to="/" className="hover:text-primary transition">Features</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lovbel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
