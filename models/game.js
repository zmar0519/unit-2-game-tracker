import mongoose from 'mongoose'

export {
  Game
}

const gameSchema = new mongoose.Schema({
    name: String,
    releaseDate: Date,
    genre: String,
    rating: String,
    owner: {type: mongoose.Schema.Types.ObjectId, 'ref': "Profile"}
  }, {
    timestamps: true
  })

  const Game = mongoose.model('Game', gameSchema)