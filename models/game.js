import mongoose from 'mongoose'

export {
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
  
  const game = mongoose.model('game', gameSchema)