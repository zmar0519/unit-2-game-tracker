import { Game } from '../models/profile.js'

export {
  index,
  create
}

function create(req, res) {
  Game.create(req.body)
  .then(game => {
    res.redirect('/games')
  })
  .catch(err => {
    res.redirect('/games')
  } )
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