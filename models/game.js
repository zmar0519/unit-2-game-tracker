import mongoose from 'mongoose'

export {

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
  
  const Profile = mongoose.model('Profile', profileSchema)