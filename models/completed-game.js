import mongoose from 'mongoose'

export {
completedGame
}

const completedGameSchema = new mongoose.Schema({
    name: String,
    avatar: String,
    releaseDate: Date,
    genre: String,
    rating: String,
  }, {
    timestamps: true
  })
  
  const completedGame = mongoose.model('completedGame', completedGameSchema)