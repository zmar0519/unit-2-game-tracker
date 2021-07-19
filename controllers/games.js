import { Game } from '../models/profile.js'

export {
  index
}

function index(req, res) {
  Game.find({})
  .then(games => {
    res.render("games/index", {
      game,
      title,
    })
    .catch(err => {
      console.log(err)
      res.redirect('/games')
    })
  })
}