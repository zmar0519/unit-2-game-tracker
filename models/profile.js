import mongoose from 'mongoose'

export {
  Profile,
  game
}

const gameSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  releaseDate: Date,
  genre: String,
  rating: String,
}, {
  timestamps: true
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  game: [gameSchema] // Ref to gameSchema
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)
const game = mongoose.model('game', gameSchema)