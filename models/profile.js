import mongoose from 'mongoose'

export {
  Profile,
}

const gamesBeatenSchema = new mongoose.Schema({
  date: Date,
  game: {type: mongoose.Schema.Types.ObjectId, ref: "Game"}
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  gamesBeaten: [gamesBeatenSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)