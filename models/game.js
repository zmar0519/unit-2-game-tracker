import mongoose from 'mongoose'

export {
  Game
}

const gameSchema = new mongoose.Schema({
    name: String,
    releaseDate: Date,
    genre: String,
    rating: String,
  }, {
    timestamps: true
  })

  const Game = mongoose.model('Game', gameSchema)