import mongoose from 'mongoose'

export {
  Profile
}

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  // game: [completedGameSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)