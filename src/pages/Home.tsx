import { Link } from 'react-router-dom'
import { Heart, Sparkles, Users, Shield, Zap, MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your <span className="text-primary">Perfect Match</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Lovbel is the modern way to connect with people who share your values and passions. 
              Start your love story today!
            </p>
            <div className="flex gap-4">
              <Link
                to="/login"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition transform hover:scale-105"
              >
                Get Started
              </Link>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-20"></div>
              <Heart className="w-80 h-80 text-primary fill-primary relative" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose Lovbel?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl hover:shadow-lg transition">
              <Sparkles className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Matching</h3>
              <p className="text-gray-600">
                Our AI-powered algorithm matches you with compatible partners based on interests and values.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl hover:shadow-lg transition">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Safe & Secure</h3>
              <p className="text-gray-600">
                Your privacy and security are our top priority. All profiles are verified and encrypted.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl hover:shadow-lg transition">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Active Community</h3>
              <p className="text-gray-600">
                Join thousands of real people looking for meaningful connections every day.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl hover:shadow-lg transition">
              <MessageCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Easy Chat</h3>
              <p className="text-gray-600">
                Start conversations instantly. Connect, chat, and get to know each other better.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl hover:shadow-lg transition">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Quick setup, instant profiles, and real-time notifications keep you in the loop.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl hover:shadow-lg transition">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Built for Love</h3>
              <p className="text-gray-600">
                Every feature is designed to help you find meaningful relationships that last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Love?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of people who found their perfect match on Lovbel. 
            It only takes 2 minutes to get started!
          </p>
          <Link
            to="/login"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
          >
            Start Your Journey Now
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">100K+</div>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">50K+</div>
              <p className="text-gray-600">Matches Made</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">10K+</div>
              <p className="text-gray-600">Success Stories</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">4.8★</div>
              <p className="text-gray-600">App Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
