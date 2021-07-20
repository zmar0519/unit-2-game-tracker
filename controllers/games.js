import { Game } from '../models/game.js'

export {
  index,
  create,
  show,
}

function show(req,res) {
  Game.findById(req.params.id)
  .then(function (game){
    res.render('games/show', {
      game
    })
  })
}

function create(req, res) {
  Game.create(req.body)
  .then(game => {
    res.redirect('/games')
  })
  .catch(err => {
    res.redirect('/games')
  })
}

function index(req, res) {
  Game.find({})
  .then(games => {
    res.render("games/index", {
      games,
      title: 'All Games',
    })
})
    .catch(err => {
    res.redirect('/games')
  })
}