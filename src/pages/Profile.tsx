import { useState, useEffect } from 'react'
import { User, Mail, MapPin, Edit2, Save, X } from 'lucide-react'

interface UserProfile {
  name: string
  email: string
  age: number
  location: string
  bio: string
  interests: string[]
}

const defaultProfile: UserProfile = {
  name: 'John Doe',
  email: 'john@example.com',
  age: 28,
  location: 'San Francisco, CA',
  bio: 'Adventure seeker and technology enthusiast. Love traveling and meeting new people!',
  interests: ['Travel', 'Technology', 'Music', 'Hiking']
}

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile)
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState<UserProfile>(defaultProfile)
  const [newInterest, setNewInterest] = useState('')

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      const user = JSON.parse(savedUser)
      setProfile(prev => ({
        ...prev,
        name: user.name,
        email: user.email
      }))
      setEditData(prev => ({
        ...prev,
        name: user.name,
        email: user.email
      }))
    }
  }, [])

  const handleEditChange = (field: keyof Omit<UserProfile, 'interests'>, value: string | number) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAddInterest = () => {
    if (newInterest.trim() && !editData.interests.includes(newInterest.trim())) {
      setEditData(prev => ({
        ...prev,
        interests: [...prev.interests, newInterest.trim()]
      }))
      setNewInterest('')
    }
  }

  const handleRemoveInterest = (interest: string) => {
    setEditData(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interest)
    }))
  }

  const handleSave = () => {
    setProfile(editData)
    setIsEditing(false)
    localStorage.setItem('user', JSON.stringify({
      name: editData.name,
      email: editData.email
    }))
  }

  const handleCancel = () => {
    setEditData(profile)
    setIsEditing(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-900">My Profile</h1>
        <button
          onClick={() => {
            if (isEditing) {
              handleCancel()
            } else {
              setIsEditing(true)
            }
          }}
          className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition"
        >
          {isEditing ? (
            <>
              <X className="w-5 h-5" />
              Cancel
            </>
          ) : (
            <>
              <Edit2 className="w-5 h-5" />
              Edit Profile
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Profile Info */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Profile Header */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-6xl mb-4">👤</div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => handleEditChange('name', e.target.value)}
                      className="text-3xl font-bold text-gray-900 mb-2 px-3 py-2 border border-gray-300 rounded-lg w-full"
                    />
                  ) : (
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{profile.name}</h2>
                  )}
                  {isEditing ? (
                    <input
                      type="number"
                      value={editData.age}
                      onChange={(e) => handleEditChange('age', parseInt(e.target.value))}
                      className="text-gray-600 px-3 py-2 border border-gray-300 rounded-lg w-24"
                    />
                  ) : (
                    <p className="text-gray-600">Age {profile.age}</p>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  {isEditing ? (
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) => handleEditChange('email', e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  ) : (
                    <span className="text-gray-700">{profile.email}</span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.location}
                      onChange={(e) => handleEditChange('location', e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  ) : (
                    <span className="text-gray-700">{profile.location}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About Me</h3>
              {isEditing ? (
                <textarea
                  value={editData.bio}
                  onChange={(e) => handleEditChange('bio', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  rows={4}
                />
              ) : (
                <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
              )}
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {(isEditing ? editData.interests : profile.interests).map(interest => (
                  <div
                    key={interest}
                    className="bg-pink-100 text-primary px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 group"
                  >
                    {interest}
                    {isEditing && (
                      <button
                        onClick={() => handleRemoveInterest(interest)}
                        className="ml-2 hover:text-red-500"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {isEditing && (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleAddInterest()
                      }
                    }}
                    placeholder="Add new interest..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    onClick={handleAddInterest}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition"
                  >
                    Add
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Save Button */}
          {isEditing && (
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleSave}
                className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Stats Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Profile Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-pink-50 rounded-lg">
                <span className="text-gray-700">Profile Views</span>
                <span className="font-bold text-primary">234</span>
              </div>
              <div className="flex justify-between p-3 bg-pink-50 rounded-lg">
                <span className="text-gray-700">Likes Received</span>
                <span className="font-bold text-primary">42</span>
              </div>
              <div className="flex justify-between p-3 bg-pink-50 rounded-lg">
                <span className="text-gray-700">Matches</span>
                <span className="font-bold text-primary">8</span>
              </div>
            </div>
          </div>

          {/* Verification Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Verification</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <span className="text-gray-700">Email Verified</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                <span className="text-gray-700">Phone Verified</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                <span className="text-gray-700">Photo Verified</span>
              </div>
            </div>
          </div>

          {/* Account Actions */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Account</h3>
            <button className="w-full border-2 border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition mb-3">
              Change Password
            </button>
            <button className="w-full border-2 border-red-300 text-red-700 py-2 rounded-lg hover:bg-red-50 transition">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
