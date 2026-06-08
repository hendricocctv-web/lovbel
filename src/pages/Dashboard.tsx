import { useState, useEffect } from 'react'
import { Heart, MessageCircle, User, Star } from 'lucide-react'

interface Profile {
  id: number
  name: string
  age: number
  location: string
  bio: string
  image: string
  interests: string[]
  liked?: boolean
}

const mockProfiles: Profile[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    age: 26,
    location: 'Los Angeles, CA',
    bio: 'Adventure seeker, coffee lover, and dog parent. Let\'s explore the world together!',
    image: '👩‍🦰',
    interests: ['Travel', 'Coffee', 'Hiking', 'Photography']
  },
  {
    id: 2,
    name: 'Emma Williams',
    age: 24,
    location: 'New York, NY',
    bio: 'Artist and music enthusiast. Looking for someone to share concerts and creative moments with.',
    image: '👱‍♀️',
    interests: ['Art', 'Music', 'Museums', 'Theater']
  },
  {
    id: 3,
    name: 'Jessica Brown',
    age: 27,
    location: 'San Francisco, CA',
    bio: 'Tech professional who loves yoga and cooking. Let\'s have meaningful conversations!',
    image: '👩‍💼',
    interests: ['Technology', 'Yoga', 'Cooking', 'Reading']
  },
  {
    id: 4,
    name: 'Amanda Davis',
    age: 25,
    location: 'Austin, TX',
    bio: 'Fitness enthusiast and foodie. Love trying new restaurants and exploring nature.',
    image: '🏃‍♀️',
    interests: ['Fitness', 'Food', 'Nature', 'Sports']
  },
  {
    id: 5,
    name: 'Michelle Garcia',
    age: 28,
    location: 'Miami, FL',
    bio: 'Passionate about travel and meeting new people. Life is an adventure!',
    image: '🌴',
    interests: ['Travel', 'Beach', 'Dancing', 'Social']
  }
]

export default function Dashboard() {
  const [profiles, setProfiles] = useState<Profile[]>(mockProfiles)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [matches, setMatches] = useState<Profile[]>([])
  const [showMatches, setShowMatches] = useState(false)

  useEffect(() => {
    const savedMatches = localStorage.getItem('matches')
    if (savedMatches) {
      setMatches(JSON.parse(savedMatches))
    }
  }, [])

  const currentProfile = profiles[currentIndex]

  const handleLike = () => {
    const newMatch = { ...currentProfile, liked: true }
    const updatedMatches = [...matches, newMatch]
    setMatches(updatedMatches)
    localStorage.setItem('matches', JSON.stringify(updatedMatches))

    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const handlePass = () => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  if (showMatches) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <button
            onClick={() => setShowMatches(false)}
            className="text-primary font-semibold hover:text-secondary transition"
          >
            ← Back to Discover
          </button>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Your Matches</h1>

        {matches.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No matches yet. Start liking profiles to find your match!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map(match => (
              <div
                key={match.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <div className="text-6xl bg-gradient-to-br from-primary to-secondary text-center py-12">
                  {match.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {match.name}, {match.age}
                  </h3>
                  <p className="text-gray-600 mb-4">{match.location}</p>
                  <p className="text-gray-700 mb-4">{match.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {match.interests.map(interest => (
                      <span
                        key={interest}
                        className="bg-pink-100 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Discover People</h1>
        <button
          onClick={() => setShowMatches(true)}
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition flex items-center gap-2"
        >
          <Heart className="w-5 h-5 fill-white" />
          My Matches ({matches.length})
        </button>
      </div>

      {currentProfile ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Card */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="text-8xl bg-gradient-to-br from-primary to-secondary text-center py-24">
                {currentProfile.image}
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {currentProfile.name}, {currentProfile.age}
                </h2>
                <p className="text-gray-600 flex items-center gap-2 mb-4">
                  <User className="w-4 h-4" />
                  {currentProfile.location}
                </p>

                <p className="text-gray-700 mb-6">{currentProfile.bio}</p>

                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-3">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProfile.interests.map(interest => (
                      <span
                        key={interest}
                        className="bg-pink-100 text-primary px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={handlePass}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-gray-400 transition"
                  >
                    Skip
                  </button>
                  <button
                    onClick={handleLike}
                    className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition flex items-center justify-center gap-2"
                  >
                    <Heart className="w-5 h-5 fill-white" />
                    Like
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Activity</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-pink-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Profiles Viewed</span>
                  <span className="text-2xl font-bold text-primary">{currentIndex + 1}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-pink-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Matches</span>
                  <span className="text-2xl font-bold text-primary">{matches.length}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-pink-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Profile Completion</span>
                  <span className="text-2xl font-bold text-primary">85%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-3 mb-4">
                <Star className="w-6 h-6 fill-white" />
                <h3 className="text-2xl font-bold">Premium Features</h3>
              </div>
              <p className="mb-6">Unlock unlimited likes, advanced filters, and see who likes you!</p>
              <button className="w-full bg-white text-primary py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Upgrade to Premium
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No more profiles to discover. Check back soon!</p>
        </div>
      )}
    </div>
  )
}
